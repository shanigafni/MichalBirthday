import React, { useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";

interface Props {
  question: Question;
  setNextQuestion: (rightAnswer: boolean) => void;
}

export default function Question(props: Props) {
  const { question, setNextQuestion } = props;
  const [currentQuestion, setCurrentQuestion] = useState(question);

  useEffect(() => {
    if (question !== currentQuestion) {
      setCurrentQuestion(question);
      setNextQuestion(false);
    }
  }, [question, currentQuestion, setNextQuestion]);

  function onAnswerSelected(id: number) {
    if (id === question.rightAnswer) {
      setNextQuestion(true);
    }
  }

  return (
    <div className="question">
      {question ? (
        <div className="list-group" key={question.id}>
          <h2 className="list-group-item active">{question.content}</h2>
          <div>
            {question.answers.map(answer => {
              return (
                <AnswerOption
                  answerId={answer.id}
                  answerContent={answer.content}
                  onAnswerSelected={id => onAnswerSelected(answer.id)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
