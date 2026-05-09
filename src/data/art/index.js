const colors = {
  id: 'art-colors',
  title: 'Colors & Mixing',
  emoji: '🎨',
  questions: [
    { id: 'ac1', question: 'What are the THREE primary colors?', options: ['Red, Green, Blue', 'Red, Yellow, Blue', 'Orange, Purple, Green', 'Pink, Teal, Purple'], correctAnswer: 1 },
    { id: 'ac2', question: 'What do you get when you mix red and yellow?', options: ['Purple', 'Green', 'Orange', 'Brown'], correctAnswer: 2 },
    { id: 'ac3', question: 'What do you get when you mix blue and yellow?', options: ['Purple', 'Orange', 'Green', 'Pink'], correctAnswer: 2 },
    { id: 'ac4', question: 'What do you get when you mix red and blue?', options: ['Green', 'Orange', 'Yellow', 'Purple'], correctAnswer: 3 },
    { id: 'ac5', question: 'Orange, green, and purple are called…', options: ['Primary colors', 'Secondary colors', 'Warm colors', 'Cool colors'], correctAnswer: 1 },
    { id: 'ac6', question: 'Which of these is a WARM color?', options: ['Blue', 'Green', 'Purple', 'Red'], correctAnswer: 3 },
    { id: 'ac7', question: 'Which of these is a COOL color?', options: ['Orange', 'Red', 'Blue', 'Yellow'], correctAnswer: 2 },
    { id: 'ac8', question: 'When you add WHITE to a color, you get a lighter version called a…', options: ['Shade', 'Tint', 'Tone', 'Hue'], correctAnswer: 1 },
    { id: 'ac9', question: 'What happens when you mix ALL the colors of paint together?', options: ['White', 'Rainbow', 'Black or dark brown', 'Clear'], correctAnswer: 2 },
    { id: 'ac10', question: 'What color do you get when you mix red and white?', options: ['Orange', 'Purple', 'Pink', 'Yellow'], correctAnswer: 2 },
  ],
};

const famousArtists = {
  id: 'art-artists',
  title: 'Famous Artists',
  emoji: '🖼️',
  questions: [
    { id: 'aa1', question: 'Who painted the "Mona Lisa"?', options: ['Picasso', 'Leonardo da Vinci', 'Michelangelo', 'Van Gogh'], correctAnswer: 1 },
    { id: 'aa2', question: 'Vincent van Gogh painted "The Starry Night." What does it show?', options: ['A beach at sunset', 'A swirly night sky with stars', 'A bowl of fruit', 'A rainy day in the park'], correctAnswer: 1 },
    { id: 'aa3', question: 'Who painted the Sistine Chapel ceiling?', options: ['Leonardo da Vinci', 'Raphael', 'Michelangelo', 'Picasso'], correctAnswer: 2 },
    { id: 'aa4', question: 'Pablo Picasso is known for creating which style of art with geometric shapes?', options: ['Realism', 'Impressionism', 'Cubism', 'Watercolor'], correctAnswer: 2 },
    { id: 'aa5', question: 'Frida Kahlo was a famous artist from which country?', options: ['France', 'Italy', 'Mexico', 'Spain'], correctAnswer: 2 },
    { id: 'aa6', question: 'What tool do painters use to put paint on a canvas?', options: ['Scissors', 'Brushes', 'Crayons', 'Pencils'], correctAnswer: 1 },
    { id: 'aa7', question: 'What do we call a sculpture that you can walk all the way around?', options: ['A painting', 'A portrait', 'A three-dimensional (3D) artwork', 'A mural'], correctAnswer: 2 },
    { id: 'aa8', question: 'What is a PORTRAIT?', options: ['A painting of a landscape', 'A drawing of a person or face', 'A picture of an animal', 'A drawing of a building'], correctAnswer: 1 },
    { id: 'aa9', question: 'What is a very large painting done on a wall called?', options: ['A canvas', 'A mural', 'A sketch', 'A print'], correctAnswer: 1 },
    { id: 'aa10', question: 'What material do sculptors use that they can carve?', options: ['Fabric', 'Paper', 'Stone or clay', 'Crayons'], correctAnswer: 2 },
  ],
};

const artQuizzes = [colors, famousArtists];
export default artQuizzes;
