const addition = {
  id: 'math-addition',
  title: 'Addition Fun',
  emoji: '➕',
  questions: [
    { id: 'ma1', question: 'What is 6 + 7?', options: ['11', '12', '13', '14'], correctAnswer: 2 },
    { id: 'ma2', question: 'What is 8 + 5?', options: ['12', '13', '14', '15'], correctAnswer: 1 },
    { id: 'ma3', question: 'What is 9 + 4?', options: ['11', '12', '13', '14'], correctAnswer: 2 },
    { id: 'ma4', question: 'What is 7 + 8?', options: ['13', '14', '15', '16'], correctAnswer: 2 },
    { id: 'ma5', question: 'What is 15 + 6?', options: ['19', '20', '21', '22'], correctAnswer: 2 },
    { id: 'ma6', question: 'What is 12 + 9?', options: ['19', '20', '21', '22'], correctAnswer: 2 },
    { id: 'ma7', question: 'What is 14 + 8?', options: ['20', '21', '22', '23'], correctAnswer: 2 },
    { id: 'ma8', question: 'What is 17 + 5?', options: ['20', '21', '22', '23'], correctAnswer: 2 },
    { id: 'ma9', question: 'What is 11 + 11?', options: ['20', '21', '22', '23'], correctAnswer: 2 },
    { id: 'ma10', question: 'What is 16 + 7?', options: ['21', '22', '23', '24'], correctAnswer: 2 },
  ],
};

const subtraction = {
  id: 'math-subtraction',
  title: 'Subtraction Stars',
  emoji: '➖',
  questions: [
    { id: 'ms1', question: 'What is 15 - 7?', options: ['6', '7', '8', '9'], correctAnswer: 2 },
    { id: 'ms2', question: 'What is 12 - 5?', options: ['5', '6', '7', '8'], correctAnswer: 2 },
    { id: 'ms3', question: 'What is 18 - 9?', options: ['7', '8', '9', '10'], correctAnswer: 2 },
    { id: 'ms4', question: 'What is 14 - 6?', options: ['6', '7', '8', '9'], correctAnswer: 2 },
    { id: 'ms5', question: 'What is 20 - 8?', options: ['10', '11', '12', '13'], correctAnswer: 2 },
    { id: 'ms6', question: 'What is 16 - 9?', options: ['5', '6', '7', '8'], correctAnswer: 2 },
    { id: 'ms7', question: 'What is 13 - 4?', options: ['7', '8', '9', '10'], correctAnswer: 2 },
    { id: 'ms8', question: 'What is 17 - 8?', options: ['7', '8', '9', '10'], correctAnswer: 2 },
    { id: 'ms9', question: 'What is 11 - 3?', options: ['6', '7', '8', '9'], correctAnswer: 2 },
    { id: 'ms10', question: 'What is 19 - 7?', options: ['10', '11', '12', '13'], correctAnswer: 2 },
  ],
};

const shapes = {
  id: 'math-shapes',
  title: 'Shapes & Patterns',
  emoji: '🔺',
  questions: [
    { id: 'msh1', question: 'How many sides does a triangle have?', options: ['2', '3', '4', '5'], correctAnswer: 1 },
    { id: 'msh2', question: 'How many sides does a rectangle have?', options: ['3', '4', '5', '6'], correctAnswer: 1 },
    { id: 'msh3', question: 'What shape has 0 sides and is perfectly round?', options: ['Square', 'Triangle', 'Circle', 'Pentagon'], correctAnswer: 2 },
    { id: 'msh4', question: 'How many sides does a hexagon have?', options: ['5', '6', '7', '8'], correctAnswer: 1 },
    { id: 'msh5', question: 'A square has all sides the same. How many sides does it have?', options: ['3', '4', '5', '6'], correctAnswer: 1 },
    { id: 'msh6', question: 'What comes next? Circle, Square, Circle, Square, ___', options: ['Triangle', 'Circle', 'Diamond', 'Star'], correctAnswer: 1 },
    { id: 'msh7', question: 'How many corners does a triangle have?', options: ['2', '3', '4', '5'], correctAnswer: 1 },
    { id: 'msh8', question: 'What shape looks like a box?', options: ['Circle', 'Triangle', 'Rectangle', 'Star'], correctAnswer: 2 },
    { id: 'msh9', question: 'Which shape has 5 sides?', options: ['Square', 'Hexagon', 'Pentagon', 'Octagon'], correctAnswer: 2 },
    { id: 'msh10', question: 'How many sides does an octagon have?', options: ['6', '7', '8', '9'], correctAnswer: 2 },
  ],
};

const mathQuizzes = [addition, subtraction, shapes];
export default mathQuizzes;
