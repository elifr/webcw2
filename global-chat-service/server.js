const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {userJoin, getCurrentUser, userLeave,
    getRoomUsers,} = require('./utils/users');
const admin = 'Admin    ';

const app = express();
const server = http.createServer(app);
const io = socketio(server);
app.use(express.static(path.join(__dirname,'public')));

const PORT = 8888;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));


// run when client connects
io.on('connection', socket => {

    socket.on('joinRoom', ({username, room}) => {

    const user = userJoin(socket.id, username,room);
     
    socket.join(user.room);
         // only to the user connects
    socket.emit('message',formatMessage(admin, 'Welcome to the chat'));

    // show when a user connects
    // broadcast.emit() notifies everyone except from the user connects
    socket.broadcast.to(user.room).emit('message',formatMessage(admin, `${user.username} has joined the chat`));

    // send users room info
    io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
    });

    });

    
   
  

    // listen for chatMessage
    socket.on('chatMessage',(msg) => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

      // when disconnects
    // close the tab or leave the room
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user){
            io.to(user.room).emit('message',formatMessage(admin,`${user.username} has left the chat`));
            // send users room info
         io.to(user.room).emit('roomUsers', {
         room: user.room,
         users: getRoomUsers(user.room)
            });
    }
       
    });   
});

