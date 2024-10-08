import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QuestionContextProvider } from './context/QuestionProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuestionContextProvider>
      <App />
    </QuestionContextProvider>
  </StrictMode>,
)
