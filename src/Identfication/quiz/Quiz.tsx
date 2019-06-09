import React, { useState, useEffect } from "react";
import { quiz } from "../../data/quiz";
import Question from "./Question";

interface Props {
  toggleModal: () => void;
}

export default function Quiz(props: Props) {
  const { toggleModal } = props;
  const [correct, setPassQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(quiz.questions[0]);
  const { title, discription, questions } = quiz;

  useEffect(() => {
    if (currentQuestion) {
      if (correct) {
        setCurrentQuestion(questions[currentQuestion.id]);
      }
    } else {
      toggleModal();
    }
  }, [correct, questions]);

  return (
    <div className="quiz">
      <div className="">
        <h2>{title}</h2>
      </div>
      <div className="desc">
        <h4>{discription}</h4>
      </div>
      <br />
      <Question question={currentQuestion} setNextQuestion={setPassQuestion} />
    </div>
  );
}
