const livingThings = {
  id: 'science-living',
  title: 'Life Science',
  emoji: '🌱',
  questions: [
    { id: 'sl1', question: 'What is a FOOD CHAIN?', options: ['A list of groceries', 'The order in which animals eat other living things for energy', 'A way animals sleep', 'How plants grow in soil'], correctAnswer: 1 },
    { id: 'sl2', question: 'In a food chain, what is a PRODUCER?', options: ['An animal that eats meat', 'An animal that eats plants', 'A plant that makes its own food from sunlight', 'An animal at the top of the chain'], correctAnswer: 2 },
    { id: 'sl3', question: 'What is PHOTOSYNTHESIS?', options: ['How animals breathe', 'The process plants use to make food from sunlight, water, and CO₂', 'How seeds travel', 'The way animals hibernate'], correctAnswer: 1 },
    { id: 'sl4', question: 'What gas do plants release during photosynthesis that animals breathe?', options: ['Carbon dioxide', 'Nitrogen', 'Hydrogen', 'Oxygen'], correctAnswer: 3 },
    { id: 'sl5', question: 'What is an ECOSYSTEM?', options: ['A type of experiment', 'All the living and non-living things in an area working together', 'Only the animals in a forest', 'A special kind of habitat for fish'], correctAnswer: 1 },
    { id: 'sl6', question: 'Which characteristic helps a polar bear survive in the Arctic?', options: ['Thin skin and short legs', 'Bright colors to attract prey', 'Thick fur and a layer of fat', 'Long antennae for sensing heat'], correctAnswer: 2 },
    { id: 'sl7', question: 'What is ADAPTATION?', options: ['Moving to a new home', 'A feature that helps a living thing survive in its environment', 'Changing what you eat each season', 'Growing taller over time'], correctAnswer: 1 },
    { id: 'sl8', question: 'What is the correct order of a butterfly\'s life cycle?', options: ['Egg → Butterfly → Caterpillar → Chrysalis', 'Egg → Caterpillar → Chrysalis → Butterfly', 'Caterpillar → Egg → Chrysalis → Butterfly', 'Chrysalis → Egg → Caterpillar → Butterfly'], correctAnswer: 1 },
    { id: 'sl9', question: 'A DECOMPOSER breaks down dead plants and animals. Which is an example?', options: ['Eagle', 'Rabbit', 'Mushroom', 'Deer'], correctAnswer: 2 },
    { id: 'sl10', question: 'An animal that eats BOTH plants and animals is called a…', options: ['Herbivore', 'Carnivore', 'Omnivore', 'Decomposer'], correctAnswer: 2 },
    { id: 'sl11', question: 'What is the basic unit of all living things?', options: ['An atom', 'A molecule', 'A cell', 'A tissue'], correctAnswer: 2 },
    { id: 'sl12', question: 'A cactus stores water in its thick stem. This is an example of…', options: ['Migration', 'Hibernation', 'Camouflage', 'Adaptation'], correctAnswer: 3 },
    { id: 'sl13', question: 'Which group of animals are VERTEBRATES (have a backbone)?', options: ['Insects and worms', 'Fish, birds, and mammals', 'Spiders and crabs', 'Jellyfish and snails'], correctAnswer: 1 },
    { id: 'sl14', question: 'Bees help plants by transferring pollen. This is called…', options: ['Germination', 'Photosynthesis', 'Pollination', 'Decomposition'], correctAnswer: 2 },
    { id: 'sl15', question: 'What does an HERBIVORE eat?', options: ['Only meat', 'Only plants', 'Both plants and animals', 'Only insects'], correctAnswer: 1 },
  ],
};

const weather = {
  id: 'science-weather',
  title: 'Earth & Weather',
  emoji: '🌤️',
  questions: [
    { id: 'sw1', question: 'What is the WATER CYCLE?', options: ['Water flowing only through rivers', 'The repeated movement of water through evaporation, condensation, and precipitation', 'How people get clean drinking water', 'The way oceans create waves'], correctAnswer: 1 },
    { id: 'sw2', question: 'What is EVAPORATION?', options: ['Water falling as rain', 'Water turning from a liquid into a gas (water vapor)', 'Water vapor turning into clouds', 'Ice melting into water'], correctAnswer: 1 },
    { id: 'sw3', question: 'What is CONDENSATION in the water cycle?', options: ['Rain falling to the ground', 'Water vapor cooling and turning into liquid droplets (clouds)', 'Water soaking into the ground', 'Ice melting in the sun'], correctAnswer: 1 },
    { id: 'sw4', question: 'What is the difference between WEATHER and CLIMATE?', options: ['They mean exactly the same thing', 'Weather is day-to-day conditions; climate is the average over many years', 'Climate changes daily; weather stays the same', 'Weather only happens in cities; climate is in nature'], correctAnswer: 1 },
    { id: 'sw5', question: 'What instrument measures wind speed?', options: ['Thermometer', 'Barometer', 'Anemometer', 'Rain gauge'], correctAnswer: 2 },
    { id: 'sw6', question: 'What does a BAROMETER measure?', options: ['Wind speed', 'Rainfall amount', 'Air pressure', 'Humidity'], correctAnswer: 2 },
    { id: 'sw7', question: 'What causes WIND?', options: ['Earth spinning very fast', 'Differences in air pressure from hot and cool air', 'Clouds moving across the sky', 'Rain evaporating quickly'], correctAnswer: 1 },
    { id: 'sw8', question: 'Which layer of Earth\'s atmosphere is closest to the surface where weather happens?', options: ['Stratosphere', 'Mesosphere', 'Troposphere', 'Exosphere'], correctAnswer: 2 },
    { id: 'sw9', question: 'A METEOROLOGIST is a scientist who studies…', options: ['Meteors and asteroids', 'The ocean and its creatures', 'Weather and the atmosphere', 'Rocks and soil'], correctAnswer: 2 },
    { id: 'sw10', question: 'What type of cloud is flat and low, often bringing rainy or overcast days?', options: ['Cirrus', 'Cumulus', 'Stratus', 'Nimbus'], correctAnswer: 2 },
    { id: 'sw11', question: 'What is PRECIPITATION?', options: ['Only snow and ice', 'Any form of water falling from clouds (rain, snow, sleet, hail)', 'Water evaporating into the air', 'Clouds forming in the sky'], correctAnswer: 1 },
    { id: 'sw12', question: 'The sun\'s energy drives the water cycle. Which step does sunlight DIRECTLY cause?', options: ['Condensation', 'Precipitation', 'Evaporation', 'Runoff'], correctAnswer: 2 },
    { id: 'sw13', question: 'What is a DROUGHT?', options: ['A very strong windstorm', 'A long period of much less rain than normal', 'A sudden flash flood', 'A blizzard with heavy snow'], correctAnswer: 1 },
    { id: 'sw14', question: 'Which clouds are high, thin, and wispy, often seen on sunny days?', options: ['Stratus', 'Cumulus', 'Cirrus', 'Cumulonimbus'], correctAnswer: 2 },
    { id: 'sw15', question: 'HUMIDITY refers to…', options: ['How hot the air feels', 'The amount of water vapor in the air', 'How fast the wind blows', 'How much it has rained'], correctAnswer: 1 },
  ],
};

const matter = {
  id: 'science-matter',
  title: 'Properties of Matter',
  emoji: '🧪',
  questions: [
    { id: 'sm1', question: 'What is MATTER?', options: ['Only things you can see', 'Anything that has mass and takes up space', 'Only things that are alive', 'Things that can only be touched'], correctAnswer: 1 },
    { id: 'sm2', question: 'What is the difference between MASS and WEIGHT?', options: ['They are exactly the same thing', 'Mass is the amount of matter in an object; weight is the pull of gravity on that mass', 'Weight is how big something is; mass is how heavy it feels', 'Mass changes on the moon; weight does not'], correctAnswer: 1 },
    { id: 'sm3', question: 'Which is a PHYSICAL CHANGE to matter?', options: ['Burning wood', 'Rusting iron', 'Cutting paper into pieces', 'Baking a cake'], correctAnswer: 2 },
    { id: 'sm4', question: 'Which is a CHEMICAL CHANGE to matter?', options: ['Melting ice', 'Folding paper', 'Breaking glass', 'Burning a candle'], correctAnswer: 3 },
    { id: 'sm5', question: 'What happens to most solids when heated?', options: ['They shrink and get smaller', 'They expand and get bigger', 'They turn directly into gas', 'They stay exactly the same'], correctAnswer: 1 },
    { id: 'sm6', question: 'What is DENSITY?', options: ['How hot an object is', 'How much space an object takes up', 'How much mass is packed into a given volume', 'How heavy something feels'], correctAnswer: 2 },
    { id: 'sm7', question: 'Why does an ice cube float in water?', options: ['Ice is denser than water', 'Ice is lighter because it has less mass', 'Ice is less dense than liquid water', 'Ice has air bubbles inside it'], correctAnswer: 2 },
    { id: 'sm8', question: 'A MIXTURE is…', options: ['Two substances that combine and form a new substance', 'Two or more substances mixed together that can be separated', 'Only gases combined together', 'A substance made of only one type of atom'], correctAnswer: 1 },
    { id: 'sm9', question: 'Salt dissolved in water is an example of a…', options: ['Chemical change', 'Physical change and a mixture', 'New substance being created', 'Chemical reaction'], correctAnswer: 1 },
    { id: 'sm10', question: 'What property describes how much light passes through a material?', options: ['Density', 'Magnetism', 'Transparency', 'Conductivity'], correctAnswer: 2 },
    { id: 'sm11', question: 'Which of these is the BEST conductor of heat?', options: ['Wood', 'Plastic', 'Rubber', 'Metal'], correctAnswer: 3 },
    { id: 'sm12', question: 'What happens to water vapor when it cools down?', options: ['It becomes a solid (ice)', 'It becomes a liquid (condensation)', 'It disappears entirely', 'It gets hotter'], correctAnswer: 1 },
    { id: 'sm13', question: 'When milk becomes cheese, this is an example of a…', options: ['Physical change', 'Change in temperature only', 'Chemical change', 'Change in shape only'], correctAnswer: 2 },
    { id: 'sm14', question: 'What tool would you use to measure the VOLUME of a liquid?', options: ['Ruler', 'Scale', 'Graduated cylinder', 'Thermometer'], correctAnswer: 2 },
    { id: 'sm15', question: 'A substance made of only one kind of atom is called an…', options: ['Mixture', 'Compound', 'Element', 'Solution'], correctAnswer: 2 },
  ],
};

const scienceQuizzes = [livingThings, weather, matter];
export default scienceQuizzes;
