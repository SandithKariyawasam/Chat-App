import React from 'react'
import './chatbox.css'
import assets from '../../../assets/assets'

const chatbox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Sandith kariyawasam<img src={assets.green_dot} className='dot' alt=''/></p>
        <img src={assets.help_icon} className='help' alt=''/>
      </div>

      <div className="chat-msg">
        <div className="s-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto quis molestiae ea expedita accusantium nesciunt. Fugit, adipisci dolorem dicta ut tempora vero temporibus laborum, enim assumenda perspiciatis voluptates culpa!</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2.03 PM</p>
          </div>
        </div>
        <div className="s-msg">
          <img src={assets.pic1} alt=""  className='msg-img'/>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2.03 PM</p>
          </div>
        </div>
        <div className="r-msg">
          <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus iusto quis molestiae ea expedita accusantium nesciunt. Fugit, adipisci dolorem dicta ut tempora vero temporibus laborum, enim assumenda perspiciatis voluptates culpa!</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2.03 PM</p>
          </div>
        </div>
      </div>



      <div className="chat-input">
        <input type="text" placeholder='Send a message' />
        <input type="file"  id="image" accept='image/png, image/jpeg' hidden/>
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default chatbox

