import * as React from 'react';
import {
  HashRouter, Route, Routes,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import './App.css';
import ThreePlay from './pages/ThreePlay';
// Run in local network:
// npm run dev -- --host

export default function Router() {
  return (
    <HashRouter
      basename={import.meta.env.REACT_HOST}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/threetest" element={<ThreePlay />} />
      </Routes>

    </HashRouter>

  );
}
