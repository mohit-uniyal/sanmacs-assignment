import React, { useEffect, useState } from 'react'
import { useQuestions } from '../../context/QuestionProvider'
import { useNavigate } from 'react-router-dom';

const Score = () => {
    const {questions, selectedOptions, setSelectedOptions}=useQuestions();
    const [score, setScore]=useState(0);
    const navigate=useNavigate();

    useEffect(()=>{
        const correctAnswers=questions.reduce(
            (totalScore, question)=>{
                if(selectedOptions[question.id] && selectedOptions[question.id]==question.answer){
                    return totalScore+1;
                }else{
                    return totalScore;
                }
            },
            0
        )
        setScore(correctAnswers);
        setSelectedOptions({});
    }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h1 className='text-8xl font-semibold'>Your Score</h1>
        <div className=' text-6xl'>{score}</div>
        <button className='text-lg text-white bg-blue-400 w-5/12 p-2 rounded-md' onClick={()=>{navigate('/')}}>Give Again</button>
    </div>
  )
}

export default Score