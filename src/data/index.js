import mathQuizzes from './math';
import spellingQuizzes from './spelling';
import readingQuizzes from './reading';
import scienceQuizzes from './science';
import historyQuizzes from './history';
import socialStudiesQuizzes from './socialStudies';
import musicQuizzes from './music';
import artQuizzes from './art';

const subjects = [
  {
    id: 'math',
    name: 'Math',
    emoji: '🔢',
    bgColor: 'bg-pink-100',
    borderColor: 'border-pink-400',
    textColor: 'text-pink-700',
    buttonColor: 'bg-pink-500 hover:bg-pink-600',
    lightBg: 'bg-pink-50',
    quizzes: mathQuizzes,
  },
  {
    id: 'spelling',
    name: 'Spelling',
    emoji: '🔤',
    bgColor: 'bg-purple-100',
    borderColor: 'border-purple-400',
    textColor: 'text-purple-700',
    buttonColor: 'bg-purple-500 hover:bg-purple-600',
    lightBg: 'bg-purple-50',
    quizzes: spellingQuizzes,
  },
  {
    id: 'reading',
    name: 'Reading',
    emoji: '📚',
    bgColor: 'bg-teal-100',
    borderColor: 'border-teal-400',
    textColor: 'text-teal-700',
    buttonColor: 'bg-teal-500 hover:bg-teal-600',
    lightBg: 'bg-teal-50',
    quizzes: readingQuizzes,
  },
  {
    id: 'science',
    name: 'Science',
    emoji: '🔬',
    bgColor: 'bg-emerald-100',
    borderColor: 'border-emerald-400',
    textColor: 'text-emerald-700',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600',
    lightBg: 'bg-emerald-50',
    quizzes: scienceQuizzes,
  },
  {
    id: 'history',
    name: 'History',
    emoji: '🏛️',
    bgColor: 'bg-rose-100',
    borderColor: 'border-rose-400',
    textColor: 'text-rose-700',
    buttonColor: 'bg-rose-500 hover:bg-rose-600',
    lightBg: 'bg-rose-50',
    quizzes: historyQuizzes,
  },
  {
    id: 'socialStudies',
    name: 'Social Studies',
    emoji: '🌍',
    bgColor: 'bg-indigo-100',
    borderColor: 'border-indigo-400',
    textColor: 'text-indigo-700',
    buttonColor: 'bg-indigo-500 hover:bg-indigo-600',
    lightBg: 'bg-indigo-50',
    quizzes: socialStudiesQuizzes,
  },
  {
    id: 'music',
    name: 'Music',
    emoji: '🎵',
    bgColor: 'bg-fuchsia-100',
    borderColor: 'border-fuchsia-400',
    textColor: 'text-fuchsia-700',
    buttonColor: 'bg-fuchsia-500 hover:bg-fuchsia-600',
    lightBg: 'bg-fuchsia-50',
    quizzes: musicQuizzes,
  },
  {
    id: 'art',
    name: 'Art',
    emoji: '🎨',
    bgColor: 'bg-cyan-100',
    borderColor: 'border-cyan-400',
    textColor: 'text-cyan-700',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-600',
    lightBg: 'bg-cyan-50',
    quizzes: artQuizzes,
  },
];

export default subjects;
