function SubjectCard({ subject, onClick }) {
  return (
    <button
      onClick={() => onClick(subject)}
      className={`
        ${subject.bgColor} ${subject.borderColor} ${subject.textColor}
        border-2 rounded-2xl p-5 flex flex-col items-center justify-center gap-2
        min-h-[130px] w-full
        transition-all duration-150 active:scale-95 hover:scale-105 hover:shadow-lg
        cursor-pointer select-none
      `}
    >
      <span className="text-5xl leading-none">{subject.emoji}</span>
      <span className="font-fredoka text-lg font-bold tracking-wide">{subject.name}</span>
      <span className="text-xs font-nunito font-semibold opacity-70">
        {subject.quizzes.length} quiz{subject.quizzes.length !== 1 ? 'zes' : ''}
      </span>
    </button>
  );
}

export default SubjectCard;
