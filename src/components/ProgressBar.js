function ProgressBar({ current, total, subject }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="flex justify-between font-nunito text-sm font-bold mb-1 opacity-70">
        <span>Question {current} of {total}</span>
        <span>{pct}%</span>
      </div>
      <div className="w-full bg-white bg-opacity-50 rounded-full h-3 overflow-hidden">
        <div
          className={`${subject.buttonColor.split(' ')[0]} h-3 rounded-full transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
