import React from 'react';
import './App.css';
import Home from './pages/home';
import CreatePage from './pages/create';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import PostPage from './pages/viewpost';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<CreatePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/viewpost' element={<PostPage/>} />
      </Routes>
    </div>
  );
}

export default App;
