interface Quiz {
  title: string;
  discription: string;
  questions: Question[];
}

interface Question {
  id: number;
  content: string;
  answers: Answer[];
  rightAnswer: number;
}

interface Answer {
  id: number;
  content: string;
}
