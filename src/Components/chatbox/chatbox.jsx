import React, { useContext, useEffect, useState } from 'react';
import './chatbox.css';
import assets from '../../../assets/assets';
import { AppContext } from '../../context/AppContext';
import { arrayUnion, onSnapshot, updateDoc, doc, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../Config/firebase';
import { toast } from 'react-toastify';

const Chatbox = () => {
  const { userData, messageId, chatUser, messages, setMessages } = useContext(AppContext);
  const [input, setInput] = useState("");

  
  const upload = async (file) => {
    const storage = getStorage();
    const storageRef = ref(storage, 'chat-images/' + file.name);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      console.error('Upload failed:', error);
      throw new Error('Failed to upload image');
    }
  };

  
  const sendMessage = async () => {
    try {
      if (input && messageId) {
        await updateDoc(doc(db, 'messages', messageId), {
          messages: arrayUnion({
            sId: userData.id,
            text: input,
            createdAt: new Date(),
          }),
        });

        const userIDs = [chatUser.rId, userData.id];

        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, 'chats', id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex((c) => c.messageId === messageId);
            if (chatIndex !== -1) {
              userChatData.chatsData[chatIndex].lastMessage = input.slice(0, 30);
              userChatData.chatsData[chatIndex].updatedAt = Date.now();
              if (userChatData.chatsData[chatIndex].rId === userData.id) {
                userChatData.chatsData[chatIndex].messageSeen = false;
              }
              await updateDoc(userChatsRef, {
                chatsData: userChatData.chatsData,
              });
            }
          }
        });
      } else {
        console.log('Error: Missing input or messageId');
      }
    } catch (error) {
      toast.error(error.message);
      console.error('Send message error:', error);
    }
    setInput("");
  };

  
  const sendImage = async (e) => {
    try {
      const fileUrl = await upload(e.target.files[0]);
      if (fileUrl && messageId) {
        await updateDoc(doc(db, 'messages', messageId), {
          messages: arrayUnion({
            sId: userData.id,
            image: fileUrl,
            createdAt: new Date(),
          }),
        });

        const userIDs = [chatUser.rId, userData.id];

        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, 'chats', id);
          const userChatsSnapshot = await getDoc(userChatsRef);

          if (userChatsSnapshot.exists()) {
            const userChatData = userChatsSnapshot.data();
            const chatIndex = userChatData.chatsData.findIndex((c) => c.messageId === messageId);
            if (chatIndex !== -1) {
              userChatData.chatsData[chatIndex].lastMessage = "Image";
              userChatData.chatsData[chatIndex].updatedAt = Date.now();
              if (userChatData.chatsData[chatIndex].rId === userData.id) {
                userChatData.chatsData[chatIndex].messageSeen = false;
              }
              await updateDoc(userChatsRef, {
                chatsData: userChatData.chatsData,
              });
            }
          }
        });
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  
  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate();
    const hour = date.getHours();
    const minute = date.getMinutes().toString().padStart(2, '0');
    return hour > 12
      ? `${hour - 12}:${minute} PM`
      : `${hour}:${minute} AM`;
  };

  
  useEffect(() => {
    if (messageId && typeof messageId === 'string') {
      const docRef = doc(db, 'messages', messageId);
      const unSub = onSnapshot(docRef, (res) => {
        setMessages(res.data().messages.reverse());
      });

      return () => unSub();
    }
  }, [messageId]);

  return chatUser ? (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={chatUser.userData.avatar} alt="" />
        <p>{chatUser.userData.name} {Date.now()-chatUser.userData.lastSeen <= 70000 ? <img src={assets.green_dot} className='dot' alt='' /> : null}</p>
        <img src={assets.help_icon} className='help' alt='' />
      </div>

      <div className="chat-msg">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sId === userData.id ? "s-msg" : "r-msg"}>
            {msg.text && <p className="msg">{msg.text}</p>}
            {msg.image && <img className="msg-img" src={msg.image} alt="sent-img" />}
            <div>
              <img src={msg.sId === userData.id ? userData.avatar : chatUser.userData.avatar} alt="" />
              <p>{convertTimestamp(msg.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder='Send a message'
        />
        <input onChange={sendImage} type="file" id="image" accept='image/png, image/jpeg' hidden />
        <label htmlFor="image">
          <img src={assets.gallery_icon} alt="" />
        </label>
        <img onClick={sendMessage} src={assets.send_button} alt="" />
      </div>
    </div>
  ) : (
    <div className='chat-welcome'>
      <img src={assets.logo_icon} alt='' />
      <p>Chat anytime, anywhere</p>
    </div>
  );
};

export default Chatbox;
