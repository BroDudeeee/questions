import questions from "../data";
import Question from "./Question";

const Questions = () => {
  return (
    <div>
      {questions.map((quest) => (
        <Question key={quest.id} {...quest} />
      ))}
    </div>
  );
};

export default Questions;
