import * as React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>

    </BrowserRouter>
  );
}
