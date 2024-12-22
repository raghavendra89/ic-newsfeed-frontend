import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />

        <Route path="/my-feed" element={<App />} />
        <Route path="/preferences" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
