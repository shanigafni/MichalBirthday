import React from "react";

interface Props {
  answerId: number;
  answerContent: string;
  onAnswerSelected: (id: number) => void;
}

export default function AnswerOption(props: Props) {
  const { answerId, answerContent, onAnswerSelected } = props;

  return (
    <div className="list-group-item answer">
      <div onClick={id => onAnswerSelected(answerId)}>{answerContent}</div>
    </div>
  );
}
