import { useState } from "react";
import "../styles.css";

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
    setShowBtn(!showBtn);
  };
  return (
    <div className="question">
      <div className="titleBtn">
        <h4>{title}</h4>
        <button onClick={toggleInfo} className="plusMinusBtn">
          {showBtn ? "-" : "+"}
        </button>
      </div>
      <p>{showInfo && info}</p>
    </div>
  );
};

export default Question;
