const communityHelpers = {
  id: 'ss-community',
  title: 'Community Helpers',
  emoji: '👩‍⚕️',
  questions: [
    { id: 'ss1', question: 'Who helps keep us safe and stops crimes in the community?', options: ['Teachers', 'Police officers', 'Doctors', 'Farmers'], correctAnswer: 1 },
    { id: 'ss2', question: 'Who puts out fires and rescues people in emergencies?', options: ['Firefighters', 'Mail carriers', 'Librarians', 'Nurses'], correctAnswer: 0 },
    { id: 'ss3', question: 'Who teaches children in school?', options: ['Doctors', 'Dentists', 'Teachers', 'Chefs'], correctAnswer: 2 },
    { id: 'ss4', question: 'Who helps sick people feel better?', options: ['Firefighters', 'Doctors and nurses', 'Police officers', 'Farmers'], correctAnswer: 1 },
    { id: 'ss5', question: 'Who delivers letters and packages to your home?', options: ['Pilots', 'Mail carriers', 'Bus drivers', 'Librarians'], correctAnswer: 1 },
    { id: 'ss6', question: 'Who helps you find books and learn at a library?', options: ['A chef', 'A librarian', 'A pilot', 'A farmer'], correctAnswer: 1 },
    { id: 'ss7', question: 'What do we call the leader of a city or town?', options: ['President', 'Governor', 'Mayor', 'King'], correctAnswer: 2 },
    { id: 'ss8', question: 'Who grows the food that we eat?', options: ['Pilots', 'Librarians', 'Farmers', 'Dentists'], correctAnswer: 2 },
    { id: 'ss9', question: 'Who takes care of our teeth?', options: ['A dentist', 'A vet', 'A nurse', 'A firefighter'], correctAnswer: 0 },
    { id: 'ss10', question: 'A VET is a doctor who takes care of…', options: ['Children', 'Adults', 'Animals', 'Elderly people'], correctAnswer: 2 },
  ],
};

const mapsDirections = {
  id: 'ss-maps',
  title: 'Maps & Our World',
  emoji: '🗺️',
  questions: [
    { id: 'md1', question: 'What do we call a drawing that shows where places are?', options: ['Painting', 'Map', 'Photograph', 'Story'], correctAnswer: 1 },
    { id: 'md2', question: 'What are the four cardinal directions?', options: ['Left, Right, Up, Down', 'North, South, East, West', 'Near, Far, High, Low', 'In, Out, Over, Under'], correctAnswer: 1 },
    { id: 'md3', question: 'A globe is shaped like a…', options: ['Square', 'Triangle', 'Sphere (ball)', 'Cylinder'], correctAnswer: 2 },
    { id: 'md4', question: 'What is the name of the large piece of land we call home in North America?', options: ['An island', 'A continent', 'A country', 'An ocean'], correctAnswer: 1 },
    { id: 'md5', question: 'The United States is part of which continent?', options: ['South America', 'Africa', 'Europe', 'North America'], correctAnswer: 3 },
    { id: 'md6', question: 'On a map, North is usually pointing in which direction?', options: ['Down', 'Left', 'Right', 'Up'], correctAnswer: 3 },
    { id: 'md7', question: 'What do we call a very large body of salt water?', options: ['A lake', 'A river', 'An ocean', 'A pond'], correctAnswer: 2 },
    { id: 'md8', question: 'How many continents are there on Earth?', options: ['5', '6', '7', '8'], correctAnswer: 2 },
    { id: 'md9', question: 'What is the name of a community of people living together called?', options: ['A country', 'A neighborhood', 'A continent', 'An ocean'], correctAnswer: 1 },
    { id: 'md10', question: 'What symbol on a map tells you the directions (N, S, E, W)?', options: ['A scale', 'A legend', 'A compass rose', 'A border'], correctAnswer: 2 },
  ],
};

const socialStudiesQuizzes = [communityHelpers, mapsDirections];
export default socialStudiesQuizzes;
