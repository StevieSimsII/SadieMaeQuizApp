const livingThings = {
  id: 'science-living',
  title: 'Living Things',
  emoji: '🌱',
  questions: [
    { id: 'sl1', question: 'Which of these is a LIVING thing?', options: ['A rock', 'A cloud', 'A butterfly', 'A shoe'], correctAnswer: 2 },
    { id: 'sl2', question: 'What do plants need to make their own food?', options: ['Candy and rain', 'Sunlight, water, and air', 'Soil only', 'Bugs and worms'], correctAnswer: 1 },
    { id: 'sl3', question: 'Which of these is NOT a living thing?', options: ['A tree', 'A fish', 'A table', 'A mushroom'], correctAnswer: 2 },
    { id: 'sl4', question: 'What do animals need to survive?', options: ['Only water', 'Food, water, and shelter', 'Sunlight only', 'Just air'], correctAnswer: 1 },
    { id: 'sl5', question: 'A caterpillar turns into a ___. This is called a life cycle.', options: ['Bee', 'Ladybug', 'Butterfly', 'Firefly'], correctAnswer: 2 },
    { id: 'sl6', question: 'What part of a plant soaks up water from the soil?', options: ['Leaves', 'Flowers', 'Roots', 'Seeds'], correctAnswer: 2 },
    { id: 'sl7', question: 'Which animal lays eggs?', options: ['Dog', 'Cat', 'Rabbit', 'Chicken'], correctAnswer: 3 },
    { id: 'sl8', question: 'What do we call animals that eat only plants?', options: ['Carnivores', 'Omnivores', 'Herbivores', 'Insectivores'], correctAnswer: 2 },
    { id: 'sl9', question: 'Which of these is an insect?', options: ['Spider', 'Crab', 'Ant', 'Worm'], correctAnswer: 2 },
    { id: 'sl10', question: 'What do tadpoles grow up to become?', options: ['Fish', 'Frogs', 'Turtles', 'Ducks'], correctAnswer: 1 },
  ],
};

const weather = {
  id: 'science-weather',
  title: 'Weather & Seasons',
  emoji: '🌤️',
  questions: [
    { id: 'sw1', question: 'What season comes after winter?', options: ['Summer', 'Fall', 'Spring', 'Autumn'], correctAnswer: 2 },
    { id: 'sw2', question: 'What causes rain?', options: ['Clouds getting heavy with water drops', 'The sun being too hot', 'Wind blowing hard', 'Stars falling down'], correctAnswer: 0 },
    { id: 'sw3', question: 'In which season do most trees lose their leaves?', options: ['Spring', 'Summer', 'Winter', 'Fall'], correctAnswer: 3 },
    { id: 'sw4', question: 'What is a thermometer used for?', options: ['Measuring rainfall', 'Measuring temperature', 'Measuring wind', 'Measuring snow'], correctAnswer: 1 },
    { id: 'sw5', question: 'What is frozen rain called?', options: ['Sleet or hail', 'Fog', 'Dew', 'Mist'], correctAnswer: 0 },
    { id: 'sw6', question: 'Which season is usually the hottest?', options: ['Spring', 'Fall', 'Winter', 'Summer'], correctAnswer: 3 },
    { id: 'sw7', question: 'What do we call a big storm with thunder and lightning?', options: ['Blizzard', 'Tornado', 'Thunderstorm', 'Hurricane'], correctAnswer: 2 },
    { id: 'sw8', question: 'What season comes after summer?', options: ['Spring', 'Winter', 'Fall', 'Rainy season'], correctAnswer: 2 },
    { id: 'sw9', question: 'Clouds are made of tiny drops of ___?', options: ['Sugar', 'Dust', 'Water', 'Air'], correctAnswer: 2 },
    { id: 'sw10', question: 'What forms when sunlight passes through water drops in the air?', options: ['A cloud', 'A rainbow', 'Thunder', 'Wind'], correctAnswer: 1 },
  ],
};

const matter = {
  id: 'science-matter',
  title: 'Solids, Liquids & Gas',
  emoji: '🧪',
  questions: [
    { id: 'sm1', question: 'Which of these is a SOLID?', options: ['Water', 'Air', 'A rock', 'Juice'], correctAnswer: 2 },
    { id: 'sm2', question: 'Which of these is a LIQUID?', options: ['A pencil', 'Milk', 'A chair', 'Ice'], correctAnswer: 1 },
    { id: 'sm3', question: 'What happens to water when you freeze it?', options: ['It becomes a gas', 'It disappears', 'It becomes ice (solid)', 'It becomes heavier'], correctAnswer: 2 },
    { id: 'sm4', question: 'What do we call the state of matter that has no shape and fills its container?', options: ['Solid', 'Liquid', 'Gas', 'Plasma'], correctAnswer: 2 },
    { id: 'sm5', question: 'What is air an example of?', options: ['Solid', 'Liquid', 'Gas', 'Metal'], correctAnswer: 2 },
    { id: 'sm6', question: 'When ice melts, it becomes…', options: ['A gas', 'A liquid (water)', 'A bigger solid', 'Nothing'], correctAnswer: 1 },
    { id: 'sm7', question: 'Which of these is the BEST example of a solid?', options: ['Steam', 'Soda', 'A table', 'Soup'], correctAnswer: 2 },
    { id: 'sm8', question: 'What happens to water when you boil it?', options: ['It becomes a solid', 'It turns into steam (gas)', 'It gets colder', 'It becomes thicker'], correctAnswer: 1 },
    { id: 'sm9', question: 'A liquid takes the shape of…', options: ['A square', 'Its container', 'Nothing at all', 'A circle'], correctAnswer: 1 },
    { id: 'sm10', question: 'Which word describes something you CAN pour?', options: ['Solid', 'Gas', 'Liquid', 'Hard'], correctAnswer: 2 },
  ],
};

const scienceQuizzes = [livingThings, weather, matter];
export default scienceQuizzes;
