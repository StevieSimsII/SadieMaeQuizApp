import SubjectCard from './SubjectCard';

function Home({ subjects, onSelectSubject }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-teal-100 px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-3">🌟</div>
          <h1 className="font-fredoka text-4xl sm:text-5xl text-pink-600 mb-2 leading-tight">
            Sadie Mae's Quiz App
          </h1>
          <p className="font-nunito text-lg text-purple-500 font-semibold">
            What do you want to learn today?
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subject={subject}
              onClick={onSelectSubject}
            />
          ))}
        </div>

        <p className="text-center mt-8 font-nunito text-sm text-purple-400 font-semibold">
          ✨ Pick a subject to start a quiz! ✨
        </p>
      </div>
    </div>
  );
}

export default Home;
