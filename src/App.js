import { useState } from 'react';
import subjects from './data';
import Home from './components/Home';
import QuizList from './components/QuizList';
import Quiz from './components/Quiz';
import Results from './components/Results';

function App() {
  const [screen, setScreen] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);

  function handleSelectSubject(subject) {
    setSelectedSubject(subject);
    setScreen('quizList');
  }

  function handleSelectQuiz(quiz) {
    setSelectedQuiz(quiz);
    setAnswers([]);
    setScreen('quiz');
  }

  function handleQuizFinish(finalAnswers) {
    setAnswers(finalAnswers);
    setScreen('results');
  }

  function handleTryAgain() {
    setAnswers([]);
    setScreen('quiz');
  }

  function handlePickAnother() {
    setScreen('quizList');
  }

  function handleHome() {
    setSelectedSubject(null);
    setSelectedQuiz(null);
    setAnswers([]);
    setScreen('home');
  }

  if (screen === 'home') {
    return <Home subjects={subjects} onSelectSubject={handleSelectSubject} />;
  }

  if (screen === 'quizList') {
    return (
      <QuizList
        subject={selectedSubject}
        onSelectQuiz={handleSelectQuiz}
        onBack={handleHome}
      />
    );
  }

  if (screen === 'quiz') {
    return (
      <Quiz
        quiz={selectedQuiz}
        subject={selectedSubject}
        onFinish={handleQuizFinish}
        onBack={handlePickAnother}
      />
    );
  }

  if (screen === 'results') {
    return (
      <Results
        quiz={selectedQuiz}
        subject={selectedSubject}
        answers={answers}
        onTryAgain={handleTryAgain}
        onPickAnother={handlePickAnother}
        onHome={handleHome}
      />
    );
  }

  return null;
}

export default App;
