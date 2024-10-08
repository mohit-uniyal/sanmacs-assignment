import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Questions from './pages/question/Questions'
import Submit from './pages/submit/Submit'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App