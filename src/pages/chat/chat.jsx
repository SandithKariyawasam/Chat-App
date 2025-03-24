import React from 'react'
import './chat.css'
import LeftSideBar from '../../Components/leftsidebar/leftsidebar'
import ChatBox from '../../Components/chatbox/chatbox'
import RightSideBar from '../../Components/rightsidebar/rightsidebar'

const chat = () => {
  return (
    <div className='chat'>
      <div className="chat-container">
        <LeftSideBar/>
        <ChatBox/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default chat
