const sightWords1 = {
  id: 'spelling-sight1',
  title: 'Sight Words: Set 1',
  emoji: '👁️',
  questions: [
    { id: 'sw1q1', question: 'Which word means the opposite of "go"?', options: ['come', 'stop', 'run', 'stay'], correctAnswer: 1 },
    { id: 'sw1q2', question: 'Which is spelled correctly?', options: ['teh', 'the', 'hte', 'tbe'], correctAnswer: 1 },
    { id: 'sw1q3', question: 'Which word means "belonging to me"?', options: ['your', 'their', 'my', 'our'], correctAnswer: 2 },
    { id: 'sw1q4', question: 'Fill in the blank: ___ are going to the park.', options: ['We', 'Us', 'Our', 'Me'], correctAnswer: 0 },
    { id: 'sw1q5', question: 'Which word is spelled correctly?', options: ['frend', 'freind', 'friend', 'friand'], correctAnswer: 2 },
    { id: 'sw1q6', question: 'Which word means "a large body of water"?', options: ['lake', 'ocean', 'river', 'pond'], correctAnswer: 1 },
    { id: 'sw1q7', question: 'Which is spelled correctly?', options: ['becaus', 'becuase', 'because', 'becose'], correctAnswer: 2 },
    { id: 'sw1q8', question: 'Fill in the blank: I like ___ play outside.', options: ['too', 'to', 'two', 'tow'], correctAnswer: 1 },
    { id: 'sw1q9', question: 'Which word means "very big"?', options: ['small', 'tiny', 'large', 'little'], correctAnswer: 2 },
    { id: 'sw1q10', question: 'Which is spelled correctly?', options: ['peple', 'people', 'poeple', 'pepole'], correctAnswer: 1 },
  ],
};

const sightWords2 = {
  id: 'spelling-sight2',
  title: 'Sight Words: Set 2',
  emoji: '⭐',
  questions: [
    { id: 'sw2q1', question: 'Which word means "not far"?', options: ['far', 'near', 'wide', 'tall'], correctAnswer: 1 },
    { id: 'sw2q2', question: 'Which is spelled correctly?', options: ['agin', 'agen', 'again', 'agian'], correctAnswer: 2 },
    { id: 'sw2q3', question: 'Fill in the blank: ___ did you go yesterday?', options: ['What', 'When', 'Where', 'Who'], correctAnswer: 2 },
    { id: 'sw2q4', question: 'Which is spelled correctly?', options: ['always', 'allways', 'alwayz', 'alwys'], correctAnswer: 0 },
    { id: 'sw2q5', question: 'Which word means "beneath"?', options: ['over', 'under', 'beside', 'above'], correctAnswer: 1 },
    { id: 'sw2q6', question: 'Which is spelled correctly?', options: ['siad', 'sayd', 'said', 'sed'], correctAnswer: 2 },
    { id: 'sw2q7', question: 'Fill in the blank: The dog is ___ the table.', options: ['on', 'under', 'near', 'all'], correctAnswer: 0 },
    { id: 'sw2q8', question: 'Which word means "at this time"?', options: ['then', 'later', 'now', 'after'], correctAnswer: 2 },
    { id: 'sw2q9', question: 'Which is spelled correctly?', options: ['every', 'evry', 'everry', 'everi'], correctAnswer: 0 },
    { id: 'sw2q10', question: 'Which word is the opposite of "first"?', options: ['second', 'next', 'last', 'third'], correctAnswer: 2 },
  ],
};

const shortVowels = {
  id: 'spelling-vowels',
  title: 'Short Vowel Words',
  emoji: '🔤',
  questions: [
    { id: 'svq1', question: 'Which word has a short "a" sound like in "cat"?', options: ['cake', 'hat', 'rate', 'late'], correctAnswer: 1 },
    { id: 'svq2', question: 'Which word rhymes with "dog"?', options: ['bog', 'dig', 'bag', 'dug'], correctAnswer: 0 },
    { id: 'svq3', question: 'Which word has a short "i" sound like in "sit"?', options: ['kite', 'bite', 'hit', 'hide'], correctAnswer: 2 },
    { id: 'svq4', question: 'Which word rhymes with "hen"?', options: ['pin', 'pan', 'pen', 'pun'], correctAnswer: 2 },
    { id: 'svq5', question: 'Which word has a short "u" sound like in "cup"?', options: ['mule', 'cute', 'bug', 'tune'], correctAnswer: 2 },
    { id: 'svq6', question: 'Which word rhymes with "map"?', options: ['mop', 'mip', 'mup', 'nap'], correctAnswer: 3 },
    { id: 'svq7', question: 'Which word has a short "o" sound like in "hop"?', options: ['home', 'hole', 'hot', 'hose'], correctAnswer: 2 },
    { id: 'svq8', question: 'Which word rhymes with "bed"?', options: ['bid', 'bad', 'red', 'bud'], correctAnswer: 2 },
    { id: 'svq9', question: 'Which word has a short "e" sound like in "pet"?', options: ['feet', 'meet', 'net', 'beat'], correctAnswer: 2 },
    { id: 'svq10', question: 'Which word rhymes with "fun"?', options: ['fin', 'fan', 'fen', 'sun'], correctAnswer: 3 },
  ],
};

const spellingQuizzes = [sightWords1, sightWords2, shortVowels];
export default spellingQuizzes;
