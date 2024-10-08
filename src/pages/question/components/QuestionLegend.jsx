import React from "react";
import { useQuestions } from "../../../context/QuestionProvider";
import { useNavigate } from "react-router-dom";

const QuestionLegend = ({ currentQuestion, setCurrentQuestion }) => {
  const { questions, selectedOptions } = useQuestions();
  const navigate=useNavigate();
  return (
    <div className=" w-full h-full flex flex-col gap-8 items-center border-r-gray-400 border-l-2">
      <div className="text-2xl font-semibold text-center">Question Legend</div>
      <div className="w-full px-4 grid grid-cols-3 gap-3">
        {questions &&
          questions.map((question, index) => {
            return (
              <button
                className={`${
                  currentQuestion === index
                    ? "bg-red-500"
                    : selectedOptions[question.id]
                    ? "bg-green-500"
                    : "bg-slate-500"
                } text-white p-1 rounded-md`}
                key={index}
                onClick={()=>{setCurrentQuestion(index)}}
              >
                {index + 1}
              </button>
            );
          })}
      </div>
      <button className="text-lg text-white bg-blue-400 w-5/6 p-2 rounded-md" onClick={()=>{navigate('/submit')}} >
        submit
      </button>
    </div>
  );
};

export default QuestionLegend;
