const communityHelpers = {
  id: 'ss-community',
  title: 'Citizenship & Community',
  emoji: '🏛️',
  questions: [
    { id: 'ss1', question: 'What is a CITIZEN?', options: ['Only a person born in the United States', 'A person who is a legal member of a country with rights and responsibilities', 'Only adults who can vote', 'A person who works for the government'], correctAnswer: 1 },
    { id: 'ss2', question: 'What is one RESPONSIBILITY of a U.S. citizen?', options: ['Owning a home', 'Paying taxes and following the laws', 'Having a job in the government', 'Living in the same city your whole life'], correctAnswer: 1 },
    { id: 'ss3', question: 'What is a LAW?', options: ['A suggestion that people can follow if they want', 'A rule made by a government that everyone must follow', 'Only rules for schools', 'A promise made between two friends'], correctAnswer: 1 },
    { id: 'ss4', question: 'What is the difference between a NEED and a WANT?', options: ['Needs are expensive; wants are cheap', 'Needs are things required to survive (food, water, shelter); wants are things you\'d like but don\'t need to survive', 'Wants are for children; needs are for adults', 'There is no real difference'], correctAnswer: 1 },
    { id: 'ss5', question: 'What is an ECONOMY?', options: ['A type of government', 'The system of producing, trading, and consuming goods and services in a region', 'Only the money in a country\'s banks', 'The number of workers in a country'], correctAnswer: 1 },
    { id: 'ss6', question: 'What does it mean to be a CONSUMER?', options: ['A person who makes products', 'A person who buys or uses goods and services', 'A person who delivers mail', 'A person who works in a factory'], correctAnswer: 1 },
    { id: 'ss7', question: 'What does it mean to be a PRODUCER?', options: ['A person who spends money', 'A person who borrows money from a bank', 'A person or business that makes and provides goods or services', 'A person who buys products in a store'], correctAnswer: 2 },
    { id: 'ss8', question: 'SUPPLY and DEMAND affect prices. If there are fewer of a product and many people want it, the price usually…', options: ['Goes down', 'Stays exactly the same', 'Goes up', 'Disappears from stores'], correctAnswer: 2 },
    { id: 'ss9', question: 'What is a VOLUNTEER?', options: ['A paid worker in a community', 'Someone who freely gives their time to help others without being paid', 'A government worker who enforces laws', 'A student doing required work'], correctAnswer: 1 },
    { id: 'ss10', question: 'What does it mean to have FREEDOM OF SPEECH?', options: ['You can say anything to anyone with no consequences', 'The right to express your opinions and ideas without government punishment', 'Only adults can speak at public meetings', 'You can speak any language'], correctAnswer: 1 },
    { id: 'ss11', question: 'What is the purpose of TAXES?', options: ['To punish people who break laws', 'To fund government services like schools, roads, and fire departments', 'To pay soldiers only', 'To limit how much money people can earn'], correctAnswer: 1 },
    { id: 'ss12', question: 'In a DEMOCRACY, who holds the power?', options: ['A king or queen', 'A group of military leaders', 'The people, through elected representatives', 'The wealthiest families'], correctAnswer: 2 },
    { id: 'ss13', question: 'What does it mean to TRADE?', options: ['Taking things without asking', 'Exchanging goods or services with others', 'Making things in a factory', 'Buying things only with money'], correctAnswer: 1 },
    { id: 'ss14', question: 'Why is it important to RECYCLE?', options: ['To make the trash collector\'s job easier', 'To reduce waste and conserve natural resources for the future', 'Because the law requires everyone to recycle everything', 'To make more room in landfills'], correctAnswer: 1 },
    { id: 'ss15', question: 'What is CULTURAL DIVERSITY?', options: ['Everyone following the same traditions and customs', 'The variety of different cultures, backgrounds, and traditions in a community', 'Only speaking one language', 'Living in the same neighborhood as your family'], correctAnswer: 1 },
  ],
};

const mapsDirections = {
  id: 'ss-maps',
  title: 'Geography & Our World',
  emoji: '🗺️',
  questions: [
    { id: 'md1', question: 'What is LATITUDE?', options: ['Lines on a map going from top to bottom', 'Horizontal lines on a map measuring distance north or south of the Equator', 'Lines measuring distance east or west of the Prime Meridian', 'The scale used on a map'], correctAnswer: 1 },
    { id: 'md2', question: 'What is LONGITUDE?', options: ['Horizontal lines measuring distance from the Equator', 'Vertical lines on a map measuring distance east or west of the Prime Meridian', 'Lines that show elevation on a map', 'The distance between two cities'], correctAnswer: 1 },
    { id: 'md3', question: 'The EQUATOR is an imaginary line that…', options: ['Divides Earth into Eastern and Western hemispheres', 'Divides Earth into Northern and Southern hemispheres', 'Marks the North and South Poles', 'Shows where the Prime Meridian is'], correctAnswer: 1 },
    { id: 'md4', question: 'What is the PRIME MERIDIAN?', options: ['The line of latitude at 0°', 'The line of longitude at 0° that divides East and West hemispheres', 'The line marking the Equator', 'The center of a map'], correctAnswer: 1 },
    { id: 'md5', question: 'What are the SEVEN continents?', options: ['North America, South America, Europe, Asia, Africa, Australia, Antarctica', 'North America, South America, Europe, Asia, Africa, Japan, Arctic', 'Americas, Europe, Asia, Africa, Australia, Pacific Islands, Arctic', 'America, Eurasia, Africa, Australia, Antarctica, Greenland, Pacific'], correctAnswer: 0 },
    { id: 'md6', question: 'What is the largest continent by land area?', options: ['Africa', 'North America', 'Europe', 'Asia'], correctAnswer: 3 },
    { id: 'md7', question: 'What is the name of Earth\'s largest ocean?', options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'], correctAnswer: 2 },
    { id: 'md8', question: 'A MAP SCALE is used to…', options: ['Show which direction is North', 'Explain what symbols on the map mean', 'Represent the relationship between distance on the map and real distance', 'Show mountains and valleys'], correctAnswer: 2 },
    { id: 'md9', question: 'A MAP LEGEND (or key) is used to…', options: ['Show how big the map is', 'Explain the meaning of the symbols used on the map', 'Show cardinal directions', 'Tell you when the map was made'], correctAnswer: 1 },
    { id: 'md10', question: 'PHYSICAL maps show…', options: ['Political boundaries and capitals', 'Natural features like mountains, rivers, and deserts', 'Population density of regions', 'Road and highway systems'], correctAnswer: 1 },
    { id: 'md11', question: 'POLITICAL maps show…', options: ['Mountains and rivers', 'Average temperatures', 'Country borders, states, and capital cities', 'Natural resources'], correctAnswer: 2 },
    { id: 'md12', question: 'What are the four HEMISPHERES of Earth?', options: ['Top, Bottom, Left, Right', 'Northern, Southern, Eastern, Western', 'Arctic, Antarctic, Tropical, Temperate', 'Pacific, Atlantic, Indian, Arctic'], correctAnswer: 1 },
    { id: 'md13', question: 'What is a PENINSULA?', options: ['A body of land completely surrounded by water', 'A narrow piece of land connecting two larger land masses', 'A piece of land that sticks out into water, surrounded on three sides', 'A large flat area of land with no hills'], correctAnswer: 2 },
    { id: 'md14', question: 'What is an ARCHIPELAGO?', options: ['A very tall mountain range', 'A group or chain of islands', 'A wide, slow-moving river', 'A large inland sea'], correctAnswer: 1 },
    { id: 'md15', question: 'Which continent is the LEAST populated (fewest people live there year-round)?', options: ['Australia', 'South America', 'Antarctica', 'Europe'], correctAnswer: 2 },
  ],
};

const socialStudiesQuizzes = [communityHelpers, mapsDirections];
export default socialStudiesQuizzes;
