const americanSymbols = {
  id: 'history-symbols',
  title: 'American Symbols & Government',
  emoji: '🗽',
  questions: [
    { id: 'hs1', question: 'The 13 stripes on the American flag represent the original 13…', options: ['Presidents', 'Colonies', 'States today', 'Wars fought'], correctAnswer: 1 },
    { id: 'hs2', question: 'The Declaration of Independence was signed in what year?', options: ['1607', '1776', '1789', '1865'], correctAnswer: 1 },
    { id: 'hs3', question: 'What is the job of the LEGISLATIVE branch of government?', options: ['To enforce the laws', 'To make the laws (Congress)', 'To interpret the laws (courts)', 'To lead the military'], correctAnswer: 1 },
    { id: 'hs4', question: 'What is the job of the JUDICIAL branch of government?', options: ['To make new laws', 'To enforce the laws', 'To interpret laws and decide if they are fair', 'To lead the country'], correctAnswer: 2 },
    { id: 'hs5', question: 'Which document begins with "We the People" and is the highest law of the United States?', options: ['The Declaration of Independence', 'The Bill of Rights', 'The Constitution', 'The Emancipation Proclamation'], correctAnswer: 2 },
    { id: 'hs6', question: 'How many branches of the U.S. federal government are there?', options: ['2', '3', '4', '50'], correctAnswer: 1 },
    { id: 'hs7', question: 'The Bill of Rights protects the freedoms of…', options: ['Only the President', 'Only members of Congress', 'All American citizens', 'Only soldiers'], correctAnswer: 2 },
    { id: 'hs8', question: 'What does the Pledge of Allegiance show?', options: ['Loyalty to the President', 'Loyalty to the flag and the United States', 'Loyalty to the military', 'Loyalty to your state'], correctAnswer: 1 },
    { id: 'hs9', question: 'The President of the United States is part of which branch of government?', options: ['Legislative', 'Executive', 'Judicial', 'Federal'], correctAnswer: 1 },
    { id: 'hs10', question: 'Which famous document said "all men are created equal" when the colonies declared freedom from Britain?', options: ['The Constitution', 'The Bill of Rights', 'The Declaration of Independence', 'The Emancipation Proclamation'], correctAnswer: 2 },
    { id: 'hs11', question: 'The Supreme Court is part of which branch of government?', options: ['Executive', 'Legislative', 'Judicial', 'Presidential'], correctAnswer: 2 },
    { id: 'hs12', question: 'Why do we have THREE branches of government?', options: ['To make government more complicated', 'To create checks and balances so no one branch has too much power', 'Because the Constitution requires exactly three presidents', 'So each state has its own branch'], correctAnswer: 1 },
    { id: 'hs13', question: 'Congress is made up of two parts. What are they?', options: ['The President and Vice President', 'The Senate and the House of Representatives', 'The Supreme Court and the Congress', 'State governments and federal government'], correctAnswer: 1 },
    { id: 'hs14', question: 'What does it mean to VOTE?', options: ['To pay taxes to the government', 'To make a choice in an election to pick leaders or decide issues', 'To write a new law', 'To join the military'], correctAnswer: 1 },
    { id: 'hs15', question: 'The motto "E Pluribus Unum" on U.S. coins is Latin for…', options: ['Freedom and Justice', 'Land of the Free', 'Out of Many, One', 'In God We Trust'], correctAnswer: 2 },
  ],
};

const americanHeroes = {
  id: 'history-heroes',
  title: 'American History Makers',
  emoji: '🦅',
  questions: [
    { id: 'hh1', question: 'The Civil War was fought mainly over what issue?', options: ['Who would be president', 'Whether slavery should continue and whether states could leave the Union', 'Land rights with other countries', 'Trade with Europe'], correctAnswer: 1 },
    { id: 'hh2', question: 'The Emancipation Proclamation (1863) did what?', options: ['Gave women the right to vote', 'Freed enslaved people in the Confederate states', 'Created the U.S. Constitution', 'Ended World War II'], correctAnswer: 1 },
    { id: 'hh3', question: 'The Civil Rights Movement of the 1950s–60s fought for…', options: ['Women\'s right to vote', 'Equal rights and an end to racial segregation', 'Independence from Britain', 'Worker safety laws'], correctAnswer: 1 },
    { id: 'hh4', question: 'What was the significance of Rosa Parks refusing to give up her bus seat in 1955?', options: ['It ended the Civil War', 'It helped spark the Montgomery Bus Boycott and the Civil Rights Movement', 'It gave women the right to vote', 'It started the American Revolution'], correctAnswer: 1 },
    { id: 'hh5', question: 'Susan B. Anthony was a leader in the fight for…', options: ['Ending slavery', 'Women\'s right to vote (suffrage)', 'Equal rights for Native Americans', 'Workers\' labor rights'], correctAnswer: 1 },
    { id: 'hh6', question: 'The 19th Amendment to the Constitution (1920) gave what right to women?', options: ['The right to own property', 'The right to vote', 'The right to hold public office', 'Equal pay for equal work'], correctAnswer: 1 },
    { id: 'hh7', question: 'The Lewis and Clark Expedition explored what part of North America?', options: ['The East Coast', 'The Western territories of the Louisiana Purchase', 'Canada and Alaska', 'Florida and the Gulf Coast'], correctAnswer: 1 },
    { id: 'hh8', question: 'What was the UNDERGROUND RAILROAD?', options: ['The first subway in New York', 'A network of secret routes and safe houses helping enslaved people escape to freedom', 'A mining railroad in the West', 'A trade route between colonies'], correctAnswer: 1 },
    { id: 'hh9', question: 'Who was the first American to walk on the Moon (1969)?', options: ['Buzz Aldrin', 'John Glenn', 'Neil Armstrong', 'Alan Shepard'], correctAnswer: 2 },
    { id: 'hh10', question: 'Benjamin Franklin is known for his experiments proving that lightning is…', options: ['A type of fire from the clouds', 'A form of electricity', 'Hot air from the atmosphere', 'Steam from the ocean'], correctAnswer: 1 },
    { id: 'hh11', question: 'The American Revolution was a war fought against which country?', options: ['France', 'Spain', 'Great Britain', 'Germany'], correctAnswer: 2 },
    { id: 'hh12', question: 'Who was President during the Civil War and helped end slavery?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'Andrew Jackson'], correctAnswer: 2 },
    { id: 'hh13', question: 'What was Harriet Tubman\'s role in the Underground Railroad?', options: ['She founded it', 'She was a conductor who led many freedom seekers to safety', 'She wrote the laws protecting it', 'She was the first person to use it'], correctAnswer: 1 },
    { id: 'hh14', question: 'Which president delivered the Gettysburg Address during the Civil War?', options: ['George Washington', 'Thomas Jefferson', 'Abraham Lincoln', 'Ulysses S. Grant'], correctAnswer: 2 },
    { id: 'hh15', question: 'The Constitution was written in which city in 1787?', options: ['Boston', 'New York City', 'Washington D.C.', 'Philadelphia'], correctAnswer: 3 },
  ],
};

const historyQuizzes = [americanSymbols, americanHeroes];
export default historyQuizzes;
