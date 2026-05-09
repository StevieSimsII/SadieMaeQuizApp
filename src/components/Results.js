function Results({ quiz, subject, answers, onTryAgain, onPickAnother, onHome }) {
  const total = quiz.questions.length;
  const correct = answers.filter((a) => a.selected === a.correct).length;
  const pct = Math.round((correct / total) * 100);

  const stars = correct >= total ? 3 : correct >= Math.ceil(total * 0.7) ? 2 : correct >= Math.ceil(total * 0.4) ? 1 : 0;

  const messages = {
    3: ["Perfect score! You're a superstar! 🌟", "WOW! You got them ALL right! Amazing! 🎉", "100%! Sadie Mae is BRILLIANT! 🏆"],
    2: ["Great job! You're doing so well! 🌈", "You're really smart! Keep it up! ✨", "So proud of you! Almost perfect! 🥳"],
    1: ["Good try! Practice makes perfect! 💪", "You're learning every day! Try again! 🌸", "Nice effort! You can do it! 🎊"],
    0: ["Don't give up! Try again and you'll do great! 💖", "Every try makes you smarter! 🌟", "Keep going, Sadie Mae! You've got this! 🚀"],
  };

  const message = messages[stars][Math.floor(Math.random() * 3)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-teal-100 px-4 py-8">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-7xl mb-4">{stars === 3 ? '🏆' : stars === 2 ? '🎉' : stars === 1 ? '🌸' : '💪'}</div>

        <h2 className="font-fredoka text-3xl sm:text-4xl text-pink-600 mb-2">{quiz.title}</h2>

        <div className="bg-white rounded-3xl shadow-md p-8 mb-6">
          <div className="text-6xl font-fredoka text-purple-600 mb-1">{correct}/{total}</div>
          <p className="font-nunito text-gray-500 font-semibold text-lg mb-4">{pct}% correct</p>

          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3].map((s) => (
              <span key={s} className={`text-4xl transition-all ${s <= stars ? 'opacity-100' : 'opacity-20'}`}>
                ⭐
              </span>
            ))}
          </div>

          <p className={`font-nunito font-bold text-lg ${subject.textColor}`}>{message}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <p className="font-fredoka text-purple-600 text-lg mb-3">Question Review</p>
          <div className="flex flex-col gap-2 text-left max-h-64 overflow-y-auto">
            {answers.map((a, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-nunito font-semibold ${a.selected === a.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
              >
                <span className="mt-0.5">{a.selected === a.correct ? '✅' : '❌'}</span>
                <span className="flex-1 leading-snug">{quiz.questions[i].question}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button
            onClick={onTryAgain}
            className={`${subject.buttonColor} text-white font-fredoka font-bold text-xl rounded-2xl px-8 py-4 w-full transition-all active:scale-95 hover:shadow-lg`}
          >
            Try Again 🔄
          </button>
          <button
            onClick={onPickAnother}
            className="bg-purple-500 hover:bg-purple-600 text-white font-fredoka font-bold text-xl rounded-2xl px-8 py-4 w-full transition-all active:scale-95 hover:shadow-lg"
          >
            Pick Another Quiz 📚
          </button>
          <button
            onClick={onHome}
            className="bg-white border-2 border-pink-300 text-pink-600 font-fredoka font-bold text-xl rounded-2xl px-8 py-4 w-full transition-all active:scale-95 hover:shadow-md"
          >
            Home 🏠
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
