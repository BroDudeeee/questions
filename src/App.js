import Questions from "./components/Questions";
import "./styles.css";

function App() {
  return (
    <main>
      <div className="questsAnswers">
        <h2>Questions And Answers</h2>
        <div className="quests">
          <Questions />
        </div>
      </div>
    </main>
  );
}

export default App;
