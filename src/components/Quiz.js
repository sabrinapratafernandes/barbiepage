import React, {useEffect, useState} from "react";
import questions from '../data/questions';
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleSelectOption = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer){
            setScore(score + 1);
        } 

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true)
        }
    };

    return (
        <div className="">
            {showResult ? (
                <Result score={score} total={questions.length}/>
            ) : (
                <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onSelectOption={handleSelectOption}
                />
            )}
        </div>
    );
};

export default Quiz;