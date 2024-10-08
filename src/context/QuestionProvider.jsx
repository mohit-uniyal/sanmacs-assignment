import { createContext, useContext, useState, useEffect} from 'react';

const questionBank = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Mark Twain", "George Orwell", "J.K. Rowling"],
      answer: "Harper Lee",
    },
    {
      id: 4,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
      ],
      answer: "Pacific Ocean",
    },
    {
      id: 5,
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Silver", "Hydrogen"],
      answer: "Oxygen",
    },
    {
      id: 6,
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      answer: "Diamond",
    },
    {
      id: 7,
      question: "Which country won the 2018 FIFA World Cup?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: "France",
    },
    {
      id: 8,
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7",
    },
    {
      id: 9,
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      id: 10,
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Claude Monet"
      ],
      answer: "Leonardo da Vinci",
    }
  ];

export const QuestionContext=createContext(null);

export const useQuestions=()=>{
    return useContext(QuestionContext);
}

export const QuestionContextProvider=({children})=>{

    // const [questions, setQuestions]=useState([]);
    const [selectedOptions, setSelectedOptions]=useState({});

    // useEffect(()=>{
    //     setQuestions(questionBank);
    // }, []);

    return (
        <QuestionContext.Provider value={{questions: questionBank, selectedOptions, setSelectedOptions}}>
            {children}
        </QuestionContext.Provider>
    )
}

  