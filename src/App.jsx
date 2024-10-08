import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Questions from './pages/question/Questions'
import Submit from './pages/submit/Submit'
import Score from './pages/score/Score'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Questions />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/score" element={<Score />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App