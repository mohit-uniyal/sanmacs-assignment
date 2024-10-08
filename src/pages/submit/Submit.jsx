import React from 'react'
import { useQuestions } from '../../context/QuestionProvider'
import { useNavigate } from 'react-router-dom';

const Submit = () => {

  const {questions, selectedOptions}=useQuestions();
  const navigate=useNavigate();

  const checkAnswered=()=>{
    let allQuestionsAnswered=true;
    for(const question of questions){
      if(!selectedOptions[question.id]){
        allQuestionsAnswered=false;
        break;
      }
    }
    return allQuestionsAnswered;  
  }

  const handleSubmit=()=>{
    if(checkAnswered()){
      navigate('/score');
    }else{
      if(confirm("You have not answered all questions. Are you sure you want to submit?")){
        navigate('/score');
      }
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='w-7/12 my-6 flex flex-col gap-4'>
        <h1 className=' text-6xl font-bold text-center'>Question Summary</h1>
        <div className='flex flex-col gap-2'>
          {
            questions.map((question, index)=>{
              return (
                <div key={index}>
                  <div className='text-lg font-semibold'>Q.{index+1} {question.question}</div>
                  <div >Selected Option: <span className={`${selectedOptions[question.id] ? 'text-green-500' : 'text-red-500'}`}>{selectedOptions[question.id] || "Unanswered"}</span></div>
                </div>
              )
            })
          }
        </div>
        <div className='grid grid-cols-2 gap-2'>
          <button className='text-lg text-white bg-blue-400 p-2 rounded-md' onClick={()=>{navigate('/')}}>Back to Test</button>
          <button className='text-lg text-white bg-blue-400 p-2 rounded-md' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Submit