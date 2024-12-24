import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import '@tabler/core/src/scss/tabler.scss';
import '@tabler/core';
import './App.css'
import Home from './pages/Home.jsx'
import MyFeed from './pages/MyFeed.jsx'
import SingleArticle from './pages/SingleArticle.jsx'
import Layout from './Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/my-feed" element={<MyFeed />} />
          <Route path="/news/:newsId" element={<SingleArticle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
