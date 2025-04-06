import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/login/login';
import Chat from './pages/chat/chat';
import ProfileUpdate from './pages/profileupdate/profileupdate';
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Config/firebase';

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if (user) {
          navigate('/chat');
      }else{
          navigate('/');
      }
    })
  },[])

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/profileupdate' element={<ProfileUpdate />} />
    </Routes>
    </>
  );
};

export default App;


