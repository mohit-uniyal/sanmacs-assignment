import React, { useEffect, useState } from 'react'
import DisplayQuestion from './components/DisplayQuestion'
import { useQuestions } from '../../context/QuestionProvider'
import QuestionLegend from './components/QuestionLegend';

const Questions = () => {
    const {questions} = useQuestions();
    const [currentQuestion, setCurrentQuestion]=useState(0);
    
  return (
    <div className='w-screen min-h-screen flex' style={{minHeight: '100vh'}}>
        <div className=' w-10/12 h-full'>
            <DisplayQuestion currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        </div>
        <div className=' flex-grow '>
            <QuestionLegend currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
        </div>
    </div>
  )
}

export default Questions