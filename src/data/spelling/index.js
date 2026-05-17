const wordsAndRules = {
  id: 'spelling-rules',
  title: 'Spelling Rules',
  emoji: '👁️',
  questions: [
    { id: 'sr1', question: 'Which word is spelled correctly?', options: ['recieve', 'receeve', 'receive', 'recive'], correctAnswer: 2 },
    { id: 'sr2', question: 'Which word is spelled correctly?', options: ['beleive', 'believe', 'beleeve', 'beleave'], correctAnswer: 1 },
    { id: 'sr3', question: 'The rule "i before e except after c" applies to which word?', options: ['science', 'weird', 'field', 'neighbor'], correctAnswer: 2 },
    { id: 'sr4', question: 'Which word is spelled correctly?', options: ['necesary', 'neccesary', 'necessary', 'necesaary'], correctAnswer: 2 },
    { id: 'sr5', question: 'When adding "-ing" to a word ending in silent "e" (like "make"), you…', options: ['keep the e: makeing', 'drop the e: making', 'add an extra e: makeeing', 'double the e: makking'], correctAnswer: 1 },
    { id: 'sr6', question: 'Which word is spelled correctly?', options: ['definite', 'definate', 'definete', 'definitee'], correctAnswer: 0 },
    { id: 'sr7', question: 'Which contraction is correct for "they are"?', options: ["they'r", "ther'e", "they're", "theyre'"], correctAnswer: 2 },
    { id: 'sr8', question: 'Which contraction is correct for "it is"?', options: ["it's", "its'", "its", "i'ts"], correctAnswer: 0 },
    { id: 'sr9', question: '"Its" (without an apostrophe) is used to show…', options: ['It is doing something', 'Belonging to it (possessive)', 'Two things together', 'A question is being asked'], correctAnswer: 1 },
    { id: 'sr10', question: 'Which word is spelled correctly?', options: ['seperate', 'seporate', 'sepperate', 'separate'], correctAnswer: 3 },
    { id: 'sr11', question: 'When adding "-ed" to a short vowel word ending in one consonant (like "hop"), you…', options: ['just add -ed: hoped', 'double the consonant: hopped', 'drop the last letter: hoed', 'add -ied: hopied'], correctAnswer: 1 },
    { id: 'sr12', question: 'Which word is spelled correctly?', options: ['wierd', 'wieird', 'weerd', 'weird'], correctAnswer: 3 },
    { id: 'sr13', question: 'Which is the correct plural of "leaf"?', options: ['leafs', 'leafes', 'leaves', 'leives'], correctAnswer: 2 },
    { id: 'sr14', question: 'Which is the correct plural of "city"?', options: ['citys', 'cityes', 'citees', 'cities'], correctAnswer: 3 },
    { id: 'sr15', question: 'Which word is spelled correctly?', options: ['enviroment', 'environment', 'enviornment', 'enviorment'], correctAnswer: 1 },
  ],
};

const homophones = {
  id: 'spelling-homophones',
  title: 'Tricky Word Pairs',
  emoji: '⭐',
  questions: [
    { id: 'hp1', question: 'Fill in the blank: I _____ going to the store. (use the correct "there/their/they\'re")', options: ["there", "their", "they're", "thier"], correctAnswer: 2 },
    { id: 'hp2', question: '"The dog wagged ___ tail." Which word is correct?', options: ["there", "they're", "their", "thier"], correctAnswer: 2 },
    { id: 'hp3', question: '"The book is over ___." Which word is correct?', options: ["their", "they're", "thier", "there"], correctAnswer: 3 },
    { id: 'hp4', question: 'Which sentence uses "your" correctly?', options: ["Your going to love this!", "Your the best friend.", "Is that your backpack?", "Your already here."], correctAnswer: 2 },
    { id: 'hp5', question: '"___ been such a fun day!" Which word is correct?', options: ["Its", "It's", "Its'", "Itts"], correctAnswer: 1 },
    { id: 'hp6', question: '"The cat licked ___ paw." Which word is correct?', options: ["it's", "its'", "its", "itts"], correctAnswer: 2 },
    { id: 'hp7', question: 'Which is the correct homophone pair for the word that means "to listen"?', options: ['here / hear', 'hear / here', 'Both words sound the same and mean the same', 'hair / hear'], correctAnswer: 1 },
    { id: 'hp8', question: '"She ___ the answer before anyone else." Which word is correct?', options: ['new', 'gnu', 'knew', 'noo'], correctAnswer: 2 },
    { id: 'hp9', question: 'Fill in: "We ___ our homework before dinner." Which word is correct?', options: ['new', 'knew', 'do', 'done'], correctAnswer: 0 },
    { id: 'hp10', question: 'Which sentence uses "to/too/two" correctly?', options: ["I ate to much cake.", "She has too cats.", "He went two the park.", "There are two dogs and they are too tired to play."], correctAnswer: 3 },
    { id: 'hp11', question: '"He ___ his bike to school." Which word is correct? (rode/road)', options: ['road', 'rode', 'rowed', 'rowd'], correctAnswer: 1 },
    { id: 'hp12', question: 'What is the correct homophone for "by" meaning you walk next to something?', options: ['buy', 'bye', 'by', 'bi'], correctAnswer: 2 },
    { id: 'hp13', question: '"The baker will ___ the bread." Which word is correct? (knead/need)', options: ['need', 'knead', 'knede', 'nead'], correctAnswer: 1 },
    { id: 'hp14', question: '"She could ___ the flowers from outside." Which word is correct? (smell/scent)', options: ['sent', 'cent', 'scent', 'smell'], correctAnswer: 2 },
    { id: 'hp15', question: 'Which sentence uses "affect/effect" correctly?', options: ['The rain will effect our plans.', 'The storm had a big affect on the town.', 'Rain can affect how we feel.', 'The weather effected the crops.'], correctAnswer: 2 },
  ],
};

const wordPatterns = {
  id: 'spelling-patterns',
  title: 'Word Patterns & Syllables',
  emoji: '🔤',
  questions: [
    { id: 'wp1', question: 'How many syllables are in the word "TOGETHER"?', options: ['1', '2', '3', '4'], correctAnswer: 2 },
    { id: 'wp2', question: 'Which word has a LONG "a" sound spelled with "ai"?', options: ['cat', 'rain', 'rate', 'bad'], correctAnswer: 1 },
    { id: 'wp3', question: 'Which word has the "igh" spelling pattern making a long "i" sound?', options: ['might', 'mint', 'miss', 'mice'], correctAnswer: 0 },
    { id: 'wp4', question: 'How many syllables are in "UNBELIEVABLE"?', options: ['3', '4', '5', '6'], correctAnswer: 2 },
    { id: 'wp5', question: 'A DIGRAPH is two letters that make one sound. Which word has a digraph?', options: ['blend', 'chip', 'stop', 'frog'], correctAnswer: 1 },
    { id: 'wp6', question: 'Which word has a SILENT letter?', options: ['jump', 'climb', 'crash', 'bring'], correctAnswer: 1 },
    { id: 'wp7', question: 'The word "knight" has how many silent letters?', options: ['1', '2', '3', '4'], correctAnswer: 1 },
    { id: 'wp8', question: 'Which word contains the "tion" suffix (a common ending)?', options: ['station', 'stain', 'stale', 'stable'], correctAnswer: 0 },
    { id: 'wp9', question: 'How many syllables are in "ELEPHANT"?', options: ['2', '3', '4', '5'], correctAnswer: 1 },
    { id: 'wp10', question: 'Which word has the "ough" pattern that sounds like "oo"?', options: ['though', 'rough', 'through', 'cough'], correctAnswer: 2 },
    { id: 'wp11', question: 'In the word "UNHELPFUL," how many prefixes and suffixes are there?', options: ['0', '1', '2', '3'], correctAnswer: 2 },
    { id: 'wp12', question: 'Which compound word is spelled correctly?', options: ['base ball', 'basebll', 'baseball', 'baiseball'], correctAnswer: 2 },
    { id: 'wp13', question: 'How many syllables are in the word "DICTIONARY"?', options: ['3', '4', '5', '6'], correctAnswer: 1 },
    { id: 'wp14', question: 'Which word has a BLEND (two consonants where you hear both sounds)?', options: ['shop', 'chip', 'flag', 'thick'], correctAnswer: 2 },
    { id: 'wp15', question: 'The word "photography" can be broken into parts: "photo" (light) + "graph" (write) + "y." What does photography literally mean?', options: ['Writing with light', 'Drawing with color', 'Studying images', 'Printing with ink'], correctAnswer: 0 },
  ],
};

const spellingQuizzes = [wordsAndRules, homophones, wordPatterns];
export default spellingQuizzes;
