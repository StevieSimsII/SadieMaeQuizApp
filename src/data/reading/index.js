const comprehension = {
  id: 'reading-comprehension',
  title: 'Story Time',
  emoji: '📖',
  questions: [
    {
      id: 'rc1',
      question: 'What is the THEME of a story?',
      options: ['The names of the characters', 'The time and place of the story', 'The big lesson or message the story teaches', 'The problem the character faces'],
      correctAnswer: 2,
    },
    {
      id: 'rc2',
      question: '"Every morning, Maya practiced piano even when she was tired. At the recital, she played perfectly." What theme does this show?',
      options: ['Music is too difficult', 'Hard work pays off', 'Recitals are scary', 'Practicing is boring'],
      correctAnswer: 1,
    },
    {
      id: 'rc3',
      question: 'What is the POINT OF VIEW when the narrator uses "I" and is a character in the story?',
      options: ['Third-person', 'Second-person', 'First-person', 'Omniscient'],
      correctAnswer: 2,
    },
    {
      id: 'rc4',
      question: '"The wolves howled in the distance. Sara pulled her blanket tighter." What is the MOOD of this passage?',
      options: ['Happy and cheerful', 'Tense and a little scary', 'Silly and funny', 'Calm and peaceful'],
      correctAnswer: 1,
    },
    {
      id: 'rc5',
      question: 'What is the difference between FICTION and NON-FICTION?',
      options: ['Fiction is always long; non-fiction is always short', 'Fiction has pictures; non-fiction does not', 'Fiction is made-up; non-fiction is based on real facts', 'Fiction is boring; non-fiction is interesting'],
      correctAnswer: 2,
    },
    {
      id: 'rc6',
      question: 'An INFERENCE is when you…',
      options: ['Copy the exact words from the text', 'Use clues from the text plus what you know to figure something out', 'Look up a word in the dictionary', 'Read the title of a book'],
      correctAnswer: 1,
    },
    {
      id: 'rc7',
      question: '"The empty lunch tray and the sticky fingers gave away what happened to the brownies." What can you INFER?',
      options: ['The brownies were still in the oven', 'Someone ate the brownies', 'The brownies were thrown away', 'No one wanted the brownies'],
      correctAnswer: 1,
    },
    {
      id: 'rc8',
      question: 'What does an AUTHOR\'S PURPOSE mean?',
      options: ['Where the author was born', 'Why the author wrote the text', 'How long it took to write the book', 'How many pages are in the book'],
      correctAnswer: 1,
    },
    {
      id: 'rc9',
      question: 'A book that tries to make you laugh is written to…',
      options: ['Inform', 'Persuade', 'Entertain', 'Warn'],
      correctAnswer: 2,
    },
    {
      id: 'rc10',
      question: 'What is FIGURATIVE LANGUAGE?',
      options: ['Words used in their exact, literal meaning', 'Words or phrases that mean something different from their exact words', 'Only words found in a poem', 'The grammar rules of a language'],
      correctAnswer: 1,
    },
    {
      id: 'rc11',
      question: '"The stars were diamonds in the sky." This is an example of a…',
      options: ['Simile', 'Metaphor', 'Alliteration', 'Onomatopoeia'],
      correctAnswer: 1,
    },
    {
      id: 'rc12',
      question: '"She ran as fast as a cheetah." This is an example of a…',
      options: ['Metaphor', 'Hyperbole', 'Simile', 'Personification'],
      correctAnswer: 2,
    },
    {
      id: 'rc13',
      question: 'What is PERSONIFICATION?',
      options: ['Comparing two things using "like" or "as"', 'Giving human qualities to animals or objects', 'Repeating the same starting sound', 'An extreme exaggeration'],
      correctAnswer: 1,
    },
    {
      id: 'rc14',
      question: 'In a story, what is the CLIMAX?',
      options: ['The very beginning where characters are introduced', 'The most exciting or turning point of the story', 'The ending where everything is resolved', 'The part where the setting is described'],
      correctAnswer: 1,
    },
    {
      id: 'rc15',
      question: 'A text that uses headings, bold words, and diagrams is most likely…',
      options: ['A fairy tale', 'A poem', 'A non-fiction informational text', 'A play'],
      correctAnswer: 2,
    },
  ],
};

const vocabulary = {
  id: 'reading-vocabulary',
  title: 'Word Power',
  emoji: '💬',
  questions: [
    { id: 'rv1', question: 'What does "persevere" mean?', options: ['To give up easily', 'To keep trying even when it\'s hard', 'To ask for help', 'To move very quickly'], correctAnswer: 1 },
    { id: 'rv2', question: 'What does "abundant" mean?', options: ['Very rare or scarce', 'Small and tiny', 'More than enough; plentiful', 'Colorful and bright'], correctAnswer: 2 },
    { id: 'rv3', question: 'What does "conclude" mean?', options: ['To begin something new', 'To make a mistake', 'To reach a decision or finish', 'To argue about something'], correctAnswer: 2 },
    { id: 'rv4', question: 'The prefix "un-" in words like "unhappy" means…', options: ['Very much', 'Again', 'Not', 'Before'], correctAnswer: 2 },
    { id: 'rv5', question: 'The suffix "-ful" in words like "helpful" means…', options: ['Without', 'Full of', 'One who', 'The act of'], correctAnswer: 1 },
    { id: 'rv6', question: 'What does "courageous" mean?', options: ['Very tired', 'Very smart', 'Very brave', 'Very funny'], correctAnswer: 2 },
    { id: 'rv7', question: '"The scientist observed the cells carefully." What does "observed" mean?', options: ['Destroyed', 'Watched closely', 'Ignored', 'Collected'], correctAnswer: 1 },
    { id: 'rv8', question: 'What does "transparent" mean?', options: ['Very heavy', 'Colorful and bright', 'Clear enough to see through', 'Completely solid'], correctAnswer: 2 },
    { id: 'rv9', question: 'What is a SYNONYM for "angry"?', options: ['Happy', 'Furious', 'Calm', 'Excited'], correctAnswer: 1 },
    { id: 'rv10', question: 'What is an ANTONYM for "ancient"?', options: ['Old', 'Historical', 'Modern', 'Distant'], correctAnswer: 2 },
    { id: 'rv11', question: 'The prefix "re-" as in "rewrite" means…', options: ['Before', 'Against', 'Again', 'Not'], correctAnswer: 2 },
    { id: 'rv12', question: '"She spoke in a monotone voice." What does "monotone" most likely mean?', options: ['Very loud', 'One flat sound with no variation', 'Soft and gentle', 'Excited and energetic'], correctAnswer: 1 },
    { id: 'rv13', question: 'What does "consequence" mean?', options: ['A rule you must follow', 'The result of an action', 'A type of question', 'A strong feeling'], correctAnswer: 1 },
    { id: 'rv14', question: 'Which word is a HOMOPHONE for "write"?', options: ['Right', 'Rite', 'Both A and B', 'Ride'], correctAnswer: 2 },
    { id: 'rv15', question: 'What does the root word "port" (as in transport, portable) mean?', options: ['To write', 'To carry', 'To build', 'To look'], correctAnswer: 1 },
  ],
};

const readingQuizzes = [comprehension, vocabulary];
export default readingQuizzes;
