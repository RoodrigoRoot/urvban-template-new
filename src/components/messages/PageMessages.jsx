import React, { useEffect, useState } from 'react';
import Message from './Message';
import Sidebar from '../sidebar/SideBar';
//import ProfileUser from '../user/Profile';
import Chat from '../chat/Chat';



export default function PageMessage() {

    const [showChat, setShowChat] = useState(true);

    useEffect(() => {
        let chat = document.getElementById('chat')
        if (window.innerWidth < 768) {
            setShowChat(false)
            chat.style.display='none'
        }
        if (window.innerWidth > 768) {
            setShowChat(true)
            chat.style.display='block'
        }
        function handleResize() {
            if (window.innerWidth < 768) {
                setShowChat(false)
                chat.style.display='none'
            }
            if (window.innerWidth > 768) {
                setShowChat(true)
                chat.style.display='block'
            }
    }
        window.addEventListener('resize', handleResize)
      })

    return (
        <>
            <div className='d-flex'>
                <Sidebar />
                <div style={{
                    display: 'flex'
                }}>
                    <div id="message"><Message seeChat={showChat} /></div>
                    <div style={{ display: showChat ? "block" : "none" }} id="chat">
                        <Chat /></div>
                </div>
            </div>

        </>
    )
}

