import { useState } from 'react';
import ProgressBar from './ProgressBar';

const encouragements = [
  'Great job! 🌟', 'You rock! 🎉', 'Amazing! ⭐', 'Awesome! 🌈', 'Way to go! 💪',
  'Superstar! 🌟', 'You\'re so smart! 🧠', 'Fantastic! 🎊', 'Brilliant! ✨', 'Keep it up! 🚀',
];

function Quiz({ quiz, subject, onFinish, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = quiz.questions[currentIndex];
  const isLast = currentIndex === quiz.questions.length - 1;
  const isCorrect = selectedAnswer === question.correctAnswer;

  function handleAnswer(idx) {
    if (showFeedback) return;
    setSelectedAnswer(idx);
    setShowFeedback(true);
    setAnswers([...answers, { questionIndex: currentIndex, selected: idx, correct: question.correctAnswer }]);
  }

  function handleNext() {
    if (isLast) {
      onFinish([...answers]);
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  }

  function getButtonStyle(idx) {
    if (!showFeedback) {
      return `bg-white border-2 ${subject.borderColor} ${subject.textColor} hover:${subject.bgColor} active:scale-95`;
    }
    if (idx === question.correctAnswer) {
      return 'bg-green-100 border-2 border-green-500 text-green-800';
    }
    if (idx === selectedAnswer && idx !== question.correctAnswer) {
      return 'bg-red-100 border-2 border-red-400 text-red-700 opacity-80';
    }
    return 'bg-white border-2 border-gray-200 text-gray-400 opacity-50';
  }

  function getButtonIcon(idx) {
    if (!showFeedback) return null;
    if (idx === question.correctAnswer) return '✅';
    if (idx === selectedAnswer && idx !== question.correctAnswer) return '❌';
    return null;
  }

  const encouragement = encouragements[currentIndex % encouragements.length];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-teal-100 px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-nunito font-bold text-purple-600 hover:text-purple-800 mb-4 active:scale-95 transition-transform"
        >
          <span className="text-2xl">←</span>
          <span>Back</span>
        </button>

        <div className={`${subject.bgColor} ${subject.borderColor} border-2 rounded-2xl p-4 mb-5`}>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{quiz.emoji}</span>
            <span className={`font-fredoka text-xl ${subject.textColor} font-bold`}>{quiz.title}</span>
          </div>
          <ProgressBar current={currentIndex + 1} total={quiz.questions.length} subject={subject} />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-5">
          <p className="font-nunito font-bold text-gray-800 text-xl leading-snug">
            {question.question}
          </p>
        </div>

        <div className="flex flex-col gap-3 mb-5">
          {question.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showFeedback}
              className={`
                ${getButtonStyle(idx)}
                rounded-2xl px-5 py-4 text-left font-nunito font-bold text-base
                transition-all duration-150 w-full flex items-center justify-between
                min-h-[60px]
              `}
            >
              <span>{option}</span>
              {getButtonIcon(idx) && <span className="text-xl ml-2">{getButtonIcon(idx)}</span>}
            </button>
          ))}
        </div>

        {showFeedback && (
          <div className={`rounded-2xl p-4 mb-4 text-center font-nunito font-bold text-lg transition-all ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {isCorrect ? encouragement : `Keep trying! The answer is: ${question.options[question.correctAnswer]} 💡`}
          </div>
        )}

        {showFeedback && (
          <button
            onClick={handleNext}
            className={`${subject.buttonColor} text-white font-fredoka font-bold text-xl rounded-2xl px-8 py-4 w-full transition-all active:scale-95 hover:shadow-lg`}
          >
            {isLast ? 'See My Score! 🎉' : 'Next Question →'}
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;
