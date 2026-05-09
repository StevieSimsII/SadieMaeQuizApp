const comprehension = {
  id: 'reading-comprehension',
  title: 'Story Time',
  emoji: '📖',
  questions: [
    {
      id: 'rc1',
      question: 'In a story, the beginning is where characters are introduced. What part of a story tells us HOW the problem is solved?',
      options: ['Beginning', 'Middle', 'End', 'Title'],
      correctAnswer: 2,
    },
    {
      id: 'rc2',
      question: '"Lily found a puppy in the rain. She brought it home and gave it a warm bath." Who is the main character?',
      options: ['The rain', 'The puppy', 'Lily', 'The bathtub'],
      correctAnswer: 2,
    },
    {
      id: 'rc3',
      question: 'What do we call the problem in a story that the character must solve?',
      options: ['Setting', 'Conflict', 'Author', 'Illustration'],
      correctAnswer: 1,
    },
    {
      id: 'rc4',
      question: '"The cat sat on the mat by the window in the kitchen." Where does this story take place?',
      options: ['Outdoors', 'A school', 'A kitchen', 'A park'],
      correctAnswer: 2,
    },
    {
      id: 'rc5',
      question: 'What do we call the time and place where a story happens?',
      options: ['Character', 'Plot', 'Setting', 'Theme'],
      correctAnswer: 2,
    },
    {
      id: 'rc6',
      question: '"Jake was sad because his kite was stuck in a tree. Then his dad helped him get it down." How does Jake feel at the end?',
      options: ['Still sad', 'Angry', 'Happy', 'Scared'],
      correctAnswer: 2,
    },
    {
      id: 'rc7',
      question: 'What is an AUTHOR?',
      options: ['Someone who draws pictures in a book', 'Someone who writes a book', 'Someone who reads a book', 'Someone who sells a book'],
      correctAnswer: 1,
    },
    {
      id: 'rc8',
      question: 'What do we call the pictures in a book that help tell the story?',
      options: ['Chapters', 'Illustrations', 'Tables of contents', 'Glossaries'],
      correctAnswer: 1,
    },
    {
      id: 'rc9',
      question: '"She was so excited she jumped up and down!" What feeling is shown here?',
      options: ['Fear', 'Sadness', 'Excitement', 'Anger'],
      correctAnswer: 2,
    },
    {
      id: 'rc10',
      question: 'A FICTION book is…',
      options: ['A book about real people and events', 'A made-up story', 'A dictionary', 'An encyclopedia'],
      correctAnswer: 1,
    },
  ],
};

const vocabulary = {
  id: 'reading-vocabulary',
  title: 'Word Meanings',
  emoji: '💬',
  questions: [
    { id: 'rv1', question: 'What does the word "enormous" mean?', options: ['Very tiny', 'Very fast', 'Very huge', 'Very quiet'], correctAnswer: 2 },
    { id: 'rv2', question: 'What does the word "shiver" mean?', options: ['To jump high', 'To shake from cold', 'To run fast', 'To laugh loudly'], correctAnswer: 1 },
    { id: 'rv3', question: 'What does "brave" mean?', options: ['Scared of everything', 'Not afraid to face danger', 'Very sleepy', 'Very hungry'], correctAnswer: 1 },
    { id: 'rv4', question: 'What does "giggle" mean?', options: ['To cry softly', 'To yell loudly', 'To laugh in a light way', 'To snore'], correctAnswer: 2 },
    { id: 'rv5', question: 'What does "whisper" mean?', options: ['To talk very loudly', 'To talk very softly', 'To talk in a silly voice', 'To not talk at all'], correctAnswer: 1 },
    { id: 'rv6', question: 'What does "delicious" mean?', options: ['Smells bad', 'Tastes awful', 'Tastes very good', 'Looks scary'], correctAnswer: 2 },
    { id: 'rv7', question: 'What does "journey" mean?', options: ['A long trip', 'A type of food', 'A kind of animal', 'A short nap'], correctAnswer: 0 },
    { id: 'rv8', question: 'What does "curious" mean?', options: ['Bored and tired', 'Wanting to know more', 'Very angry', 'Very full'], correctAnswer: 1 },
    { id: 'rv9', question: 'What does "swiftly" mean?', options: ['Slowly', 'Loudly', 'Quickly', 'Quietly'], correctAnswer: 2 },
    { id: 'rv10', question: 'What does "enormous" mean? (harder version)', options: ['Tiny as a mouse', 'Medium-sized', 'Bigger than huge', 'Hard as a rock'], correctAnswer: 2 },
  ],
};

const readingQuizzes = [comprehension, vocabulary];
export default readingQuizzes;
