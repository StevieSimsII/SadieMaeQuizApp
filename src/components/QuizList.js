function QuizList({ subject, onSelectQuiz, onBack }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-teal-100 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-nunito font-bold text-purple-600 hover:text-purple-800 mb-6 active:scale-95 transition-transform"
        >
          <span className="text-2xl">←</span>
          <span>Back to Subjects</span>
        </button>

        <div className="text-center mb-8">
          <div className="text-5xl mb-2">{subject.emoji}</div>
          <h2 className={`font-fredoka text-3xl sm:text-4xl ${subject.textColor} mb-1`}>
            {subject.name}
          </h2>
          <p className="font-nunito text-purple-400 font-semibold">
            Choose a quiz to play!
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {subject.quizzes.map((quiz) => (
            <button
              key={quiz.id}
              onClick={() => onSelectQuiz(quiz)}
              className={`
                ${subject.bgColor} ${subject.borderColor} ${subject.textColor}
                border-2 rounded-2xl p-5 flex items-center justify-between
                transition-all duration-150 active:scale-98 hover:shadow-lg hover:scale-[1.02]
                cursor-pointer text-left w-full
              `}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl">{quiz.emoji}</span>
                <div>
                  <div className="font-fredoka text-xl font-bold">{quiz.title}</div>
                  <div className="font-nunito text-sm opacity-70 font-semibold">
                    {quiz.questions.length} questions
                  </div>
                </div>
              </div>
              <span className="text-3xl opacity-60">▶</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizList;
