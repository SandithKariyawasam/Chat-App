import React, { useContext, useEffect, useState } from 'react';
import './right.css';
import assets from '../../../assets/assets';
import { logout } from '../../Config/firebase';
import { AppContext } from '../../context/AppContext';

const RightSidebar = () => {
  const { chatUser, messages } = useContext(AppContext);
  const [msgImages, setMsgImages] = useState([]);

  useEffect(() => {
    const tempImages = messages
      .filter((msg) => msg?.image)
      .map((msg) => msg.image);
    setMsgImages(tempImages);
  }, [messages]);

  return (
    <div className='rs'>
      {chatUser && (
        <>
          <div className="rs-profile">
            <img src={chatUser.userData?.avatar} alt="avatar" />
            <h3>
              {chatUser.userData?.name}
              <img src={assets.green_dot} className='dot' alt="online" />
            </h3>
            <p>{chatUser.userData?.bio}</p>
          </div>
          <hr />
          <div className="rs-media">
            <p>Media</p>
            <div>
              {msgImages.map((url, index) => (
                <img onClick={()=>window.open(url)} key={index} src={url} alt={`media-${index}`} />
              ))}
            </div>
          </div>
        </>
      )}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default RightSidebar;
