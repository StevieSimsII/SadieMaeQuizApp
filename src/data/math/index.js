const addition = {
  id: 'math-addition',
  title: 'Addition Challenge',
  emoji: '➕',
  questions: [
    { id: 'ma1', question: 'What is 47 + 36?', options: ['73', '83', '82', '84'], correctAnswer: 1 },
    { id: 'ma2', question: 'What is 125 + 48?', options: ['163', '173', '174', '183'], correctAnswer: 1 },
    { id: 'ma3', question: 'What is 256 + 137?', options: ['383', '393', '394', '403'], correctAnswer: 1 },
    { id: 'ma4', question: 'What is 64 + 79?', options: ['133', '143', '134', '144'], correctAnswer: 1 },
    { id: 'ma5', question: 'A store had 348 apples. They got 275 more. How many apples total?', options: ['513', '523', '623', '633'], correctAnswer: 2 },
    { id: 'ma6', question: 'What is 507 + 186?', options: ['683', '693', '694', '783'], correctAnswer: 1 },
    { id: 'ma7', question: 'What is 99 + 99?', options: ['188', '197', '198', '199'], correctAnswer: 2 },
    { id: 'ma8', question: 'Maria saved $145 in January and $238 in February. How much did she save total?', options: ['373', '383', '384', '393'], correctAnswer: 1 },
    { id: 'ma9', question: 'What is 462 + 319?', options: ['771', '781', '782', '791'], correctAnswer: 1 },
    { id: 'ma10', question: 'What is 85 + 67 + 43?', options: ['185', '195', '196', '205'], correctAnswer: 1 },
    { id: 'ma11', question: 'What property says 3 + 5 = 5 + 3?', options: ['Associative Property', 'Distributive Property', 'Commutative Property', 'Identity Property'], correctAnswer: 2 },
    { id: 'ma12', question: 'What is 1,000 + 999?', options: ['1,898', '1,899', '1,999', '2,000'], correctAnswer: 2 },
    { id: 'ma13', question: 'A school has 3 classes of 28 students each. How many students total?', options: ['74', '84', '86', '94'], correctAnswer: 1 },
    { id: 'ma14', question: 'What is 375 + 425?', options: ['700', '790', '800', '810'], correctAnswer: 2 },
    { id: 'ma15', question: 'Which equation shows the Identity Property of Addition?', options: ['4 + 3 = 3 + 4', '(2 + 3) + 1 = 2 + (3 + 1)', '7 + 0 = 7', '5 + 5 = 10'], correctAnswer: 2 },
  ],
};

const subtraction = {
  id: 'math-subtraction',
  title: 'Subtraction Challenge',
  emoji: '➖',
  questions: [
    { id: 'ms1', question: 'What is 83 - 47?', options: ['34', '36', '44', '46'], correctAnswer: 1 },
    { id: 'ms2', question: 'What is 200 - 75?', options: ['115', '125', '135', '145'], correctAnswer: 1 },
    { id: 'ms3', question: 'What is 312 - 148?', options: ['154', '164', '174', '184'], correctAnswer: 1 },
    { id: 'ms4', question: 'A library had 524 books. They gave away 167. How many are left?', options: ['347', '357', '367', '377'], correctAnswer: 1 },
    { id: 'ms5', question: 'What is 1,000 - 364?', options: ['626', '636', '646', '736'], correctAnswer: 1 },
    { id: 'ms6', question: 'What is 405 - 218?', options: ['177', '187', '197', '207'], correctAnswer: 1 },
    { id: 'ms7', question: 'Tim had 750 stickers. He gave 283 away. How many does he have left?', options: ['457', '467', '477', '487'], correctAnswer: 1 },
    { id: 'ms8', question: 'What is 900 - 456?', options: ['434', '444', '454', '464'], correctAnswer: 1 },
    { id: 'ms9', question: 'What is 672 - 389?', options: ['273', '283', '293', '303'], correctAnswer: 1 },
    { id: 'ms10', question: 'A farmer picked 846 strawberries. He sold 579. How many remain?', options: ['257', '267', '277', '287'], correctAnswer: 1 },
    { id: 'ms11', question: 'What is 1,200 - 450?', options: ['650', '700', '750', '800'], correctAnswer: 2 },
    { id: 'ms12', question: 'What is 503 - 267?', options: ['226', '236', '246', '256'], correctAnswer: 1 },
    { id: 'ms13', question: 'The difference between 1,000 and 387 is…', options: ['603', '613', '623', '713'], correctAnswer: 1 },
    { id: 'ms14', question: 'What is 750 - 325?', options: ['415', '425', '435', '445'], correctAnswer: 1 },
    { id: 'ms15', question: 'A bucket holds 500 mL. You pour out 175 mL. How much is left?', options: ['305', '315', '325', '335'], correctAnswer: 2 },
  ],
};

const shapes = {
  id: 'math-shapes',
  title: 'Geometry & Measurement',
  emoji: '📐',
  questions: [
    { id: 'msh1', question: 'What is the PERIMETER of a square with sides of 6 cm each?', options: ['12 cm', '18 cm', '24 cm', '36 cm'], correctAnswer: 2 },
    { id: 'msh2', question: 'What is the AREA of a rectangle that is 5 cm long and 3 cm wide?', options: ['8 sq cm', '15 sq cm', '16 sq cm', '30 sq cm'], correctAnswer: 1 },
    { id: 'msh3', question: 'How many right angles does a rectangle have?', options: ['1', '2', '3', '4'], correctAnswer: 3 },
    { id: 'msh4', question: 'A polygon with 8 sides is called an…', options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'], correctAnswer: 2 },
    { id: 'msh5', question: 'What is the perimeter of a triangle with sides 7 cm, 5 cm, and 9 cm?', options: ['19 cm', '21 cm', '23 cm', '35 cm'], correctAnswer: 1 },
    { id: 'msh6', question: 'Which 3D shape has a circular base and comes to a point?', options: ['Sphere', 'Cylinder', 'Pyramid', 'Cone'], correctAnswer: 3 },
    { id: 'msh7', question: 'How many faces does a cube have?', options: ['4', '5', '6', '8'], correctAnswer: 2 },
    { id: 'msh8', question: 'What is the area of a square with sides of 4 inches?', options: ['8 sq in', '12 sq in', '16 sq in', '20 sq in'], correctAnswer: 2 },
    { id: 'msh9', question: 'An angle that is exactly 90° is called a…', options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'], correctAnswer: 1 },
    { id: 'msh10', question: 'Which shape has exactly ONE line of symmetry?', options: ['Square', 'Rectangle', 'Equilateral Triangle', 'Isosceles Triangle'], correctAnswer: 3 },
    { id: 'msh11', question: 'How many vertices does a rectangular prism have?', options: ['4', '6', '8', '12'], correctAnswer: 2 },
    { id: 'msh12', question: 'What is the perimeter of a rectangle that is 8 m long and 4 m wide?', options: ['12 m', '24 m', '32 m', '36 m'], correctAnswer: 1 },
    { id: 'msh13', question: 'An angle LESS than 90° is called…', options: ['Obtuse', 'Right', 'Acute', 'Straight'], correctAnswer: 2 },
    { id: 'msh14', question: 'Which 3D shape has no flat faces and no edges?', options: ['Cube', 'Cone', 'Cylinder', 'Sphere'], correctAnswer: 3 },
    { id: 'msh15', question: 'A rectangle has a length of 10 cm and a width of 6 cm. What is its area?', options: ['32 sq cm', '50 sq cm', '60 sq cm', '64 sq cm'], correctAnswer: 2 },
  ],
};

const mathQuizzes = [addition, subtraction, shapes];
export default mathQuizzes;
