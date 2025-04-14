import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import { Forms } from '../components/Forms';
import App from '../App';

export const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Cadastrar" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  )
}
