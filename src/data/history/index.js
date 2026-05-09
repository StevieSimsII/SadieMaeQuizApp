const americanSymbols = {
  id: 'history-symbols',
  title: 'American Symbols',
  emoji: '🗽',
  questions: [
    { id: 'hs1', question: 'How many stripes are on the American flag?', options: ['10', '11', '12', '13'], correctAnswer: 3 },
    { id: 'hs2', question: 'The Statue of Liberty is located in which city?', options: ['Washington D.C.', 'Los Angeles', 'New York City', 'Chicago'], correctAnswer: 2 },
    { id: 'hs3', question: 'What is the national bird of the United States?', options: ['Pigeon', 'Hawk', 'Bald Eagle', 'Owl'], correctAnswer: 2 },
    { id: 'hs4', question: 'What color are the stars on the American flag?', options: ['Red', 'Blue', 'Gold', 'White'], correctAnswer: 3 },
    { id: 'hs5', question: 'The Liberty Bell is located in which state?', options: ['Virginia', 'Pennsylvania', 'Massachusetts', 'New York'], correctAnswer: 1 },
    { id: 'hs6', question: 'How many stars are on the American flag today?', options: ['48', '49', '50', '52'], correctAnswer: 2 },
    { id: 'hs7', question: 'Where does the President of the United States live?', options: ['The Capitol Building', 'The White House', 'The Pentagon', 'The Smithsonian'], correctAnswer: 1 },
    { id: 'hs8', question: 'The red and white stripes on the flag represent the original…', options: ['Presidents', 'States', 'Colonies', 'Cities'], correctAnswer: 2 },
    { id: 'hs9', question: 'Mount Rushmore has the faces of how many presidents?', options: ['2', '3', '4', '5'], correctAnswer: 2 },
    { id: 'hs10', question: 'Which song is sung to honor America?', options: ['Happy Birthday', 'The Star-Spangled Banner', 'Jingle Bells', 'Row Your Boat'], correctAnswer: 1 },
  ],
};

const americanHeroes = {
  id: 'history-heroes',
  title: 'American Heroes',
  emoji: '🦅',
  questions: [
    { id: 'hh1', question: 'Who was the first President of the United States?', options: ['Abraham Lincoln', 'Thomas Jefferson', 'George Washington', 'Benjamin Franklin'], correctAnswer: 2 },
    { id: 'hh2', question: 'Abraham Lincoln freed the slaves with what document?', options: ['The Constitution', 'The Bill of Rights', 'The Emancipation Proclamation', 'The Declaration of Independence'], correctAnswer: 2 },
    { id: 'hh3', question: 'Martin Luther King Jr. is remembered for…', options: ['Inventing the telephone', 'Fighting for equal rights for all people', 'Flying an airplane', 'Writing poetry'], correctAnswer: 1 },
    { id: 'hh4', question: 'Who wrote "I have a dream" in his famous speech?', options: ['George Washington', 'Abraham Lincoln', 'Martin Luther King Jr.', 'Thomas Edison'], correctAnswer: 2 },
    { id: 'hh5', question: 'Who was the first woman to refuse to give up her seat on a bus, helping start the Civil Rights Movement?', options: ['Susan B. Anthony', 'Harriet Tubman', 'Rosa Parks', 'Amelia Earhart'], correctAnswer: 2 },
    { id: 'hh6', question: 'Harriet Tubman helped enslaved people escape to freedom using what route?', options: ['The Oregon Trail', 'The Underground Railroad', 'The Freedom Highway', 'The Liberty Path'], correctAnswer: 1 },
    { id: 'hh7', question: 'Who helped write the Declaration of Independence?', options: ['George Washington', 'Abraham Lincoln', 'Thomas Jefferson', 'Benjamin Franklin'], correctAnswer: 2 },
    { id: 'hh8', question: 'Neil Armstrong was famous for being the first person to…', options: ['Fly across the ocean', 'Walk on the Moon', 'Climb Mount Everest', 'Swim across a lake'], correctAnswer: 1 },
    { id: 'hh9', question: 'Which president is on the penny (one cent coin)?', options: ['George Washington', 'Thomas Jefferson', 'Franklin Roosevelt', 'Abraham Lincoln'], correctAnswer: 3 },
    { id: 'hh10', question: 'Amelia Earhart was famous for being a pioneer…', options: ['Doctor', 'Airplane pilot', 'Teacher', 'Scientist'], correctAnswer: 1 },
  ],
};

const historyQuizzes = [americanSymbols, americanHeroes];
export default historyQuizzes;
