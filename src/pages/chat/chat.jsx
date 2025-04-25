import React, { useContext, useEffect, useState } from 'react'
import './chat.css'
import LeftSideBar from '../../Components/leftsidebar/leftsidebar'
import ChatBox from '../../Components/chatbox/chatbox'
import RightSideBar from '../../Components/rightsidebar/rightsidebar'
import { AppContext } from '../../context/AppContext'

const chat = () => {

  const { chatData, userData } = useContext(AppContext);
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    if (chatData && userData) {
      setLoading(false)
    }
  },[chatData,userData])

  return (
    <div className='chat'>
      {
        loading
          ? <p className='loading'>Loading...</p>
          : <div className="chat-container">
            <LeftSideBar />
            <ChatBox />
            <RightSideBar />
          </div>
      }

    </div>
  )
}

export default chat
