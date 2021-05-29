import React from 'react'

function About() {
    return (
            <body className='background'>
                <div className='aboutContent'>
                    <h1>
                        About Us
                        <br></br>
                    </h1>
                        <p>
                        Uni Chat provides a distraction free
                    way for students to communicate
                    using the preexisting university network.
                            <ul>
                                <h4> HOME </h4>
                                The home page provides a main start point for the user.
                            </ul>
                            <ul>
                                <h4> FEED </h4>
                                Feed provides a way to send and view posts that are viewable across all courses.
                            </ul>
                            <ul>
                                <h4> CHATS </h4>
                                Chats provides a way for users to communicate to others on their modules as well as on their course.
                            </ul>
                        </p>
                </div>
            </body>
    )
}

export default About