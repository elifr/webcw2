import React from 'react'

function Home() {
    return (
        <body className='background'>

        <div className='aboutContent'>
            <ul>
            <h1>Welcome to Uni Chat</h1>
            </ul>
            <ul>
                <h6>
                    Check out the feed for the latest public posts!
                </h6>
            </ul>
            <ul>
                <h6>
                    Your module chats are already setup!
                </h6>
            </ul>
            <ul>
                <h6>
                    Use the sidebar for quick navigation!
                </h6>
            </ul>
            <ul>
            <a className='logout' href="http://localhost:8000/login">Log Out</a>
            </ul>
        </div>

        </body>
            
    );
}

export default Home
