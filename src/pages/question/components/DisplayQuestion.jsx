import React from "react";
import { useQuestions } from "../../../context/QuestionProvider";

const DisplayQuestion = ({ currentQuestion, setCurrentQuestion }) => {
  const { questions, selectedOptions, setSelectedOptions } = useQuestions();

  return (
    <div className="w-full flex justify-center pt-12">
      <div className="flex flex-col justify-center gap-3 w-1/2">
        <div className="text-2xl font-semibold ">{`Q.${questions[currentQuestion]?.id} ${questions[currentQuestion]?.question}`}</div>
        <div>
          {questions[currentQuestion] &&
            questions[currentQuestion].options &&
            questions[currentQuestion].options.map((option, index) => {
                const questionId = questions[currentQuestion].id;
              return (
                <div key={index}>
                  <input
                    type="radio"
                    id={`option-${questionId}-${index}`}
                    value={option}
                    name={`question-${questionId}`}
                    checked={selectedOptions[questionId]===option}
                    onChange={(e)=>{
                        setSelectedOptions({
                         ...selectedOptions,
                          [questionId]: e.target.value
                        });
  
                    }}
                  />{" "}
                  <label className="text-lg" htmlFor={`option-${questions[currentQuestion].id}-${index}`}>{option}</label>
                </div>
              );
            })}
        </div>
        <div className="flex justify-between">
          <button className="text-lg text-white bg-blue-400 w-5/12 p-2 rounded-md" disabled={currentQuestion===0} onClick={()=>{setCurrentQuestion(currentQuestion-1)}}>&lt;&lt; previous</button>
          <button className="text-lg text-white bg-blue-400 w-5/12 p-2 rounded-md" disabled={currentQuestion===questions.length-1} onClick={()=>{setCurrentQuestion(currentQuestion+1)}}>next &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayQuestion;
