const colors = {
  id: 'art-colors',
  title: 'Color Theory & Art Elements',
  emoji: '🎨',
  questions: [
    { id: 'ac1', question: 'What are the THREE primary colors?', options: ['Red, Green, Blue', 'Red, Yellow, Blue', 'Orange, Purple, Green', 'Cyan, Magenta, Yellow'], correctAnswer: 1 },
    { id: 'ac2', question: 'What are the THREE secondary colors?', options: ['Red, Yellow, Blue', 'Black, White, Gray', 'Orange, Green, Purple', 'Pink, Teal, Brown'], correctAnswer: 2 },
    { id: 'ac3', question: 'Colors that are next to each other on the color wheel are called…', options: ['Complementary colors', 'Analogous colors', 'Primary colors', 'Neutral colors'], correctAnswer: 1 },
    { id: 'ac4', question: 'Colors that are OPPOSITE each other on the color wheel are called…', options: ['Analogous colors', 'Warm colors', 'Complementary colors', 'Secondary colors'], correctAnswer: 2 },
    { id: 'ac5', question: 'Adding BLACK to a color to make it darker creates a…', options: ['Tint', 'Tone', 'Shade', 'Hue'], correctAnswer: 2 },
    { id: 'ac6', question: 'Adding WHITE to a color to make it lighter creates a…', options: ['Shade', 'Tint', 'Tone', 'Value'], correctAnswer: 1 },
    { id: 'ac7', question: 'What are the SEVEN elements of art?', options: ['Color, Shape, Space, Form, Line, Texture, Value', 'Color, Pattern, Rhythm, Balance, Emphasis, Unity, Proportion', 'Painting, Drawing, Sculpting, Printing, Weaving, Collage, Photography', 'Red, Yellow, Blue, Green, Orange, Purple, Brown'], correctAnswer: 0 },
    { id: 'ac8', question: 'TEXTURE in art refers to…', options: ['How dark or light a color is', 'The way a surface feels or looks like it would feel', 'The colors used in a painting', 'How big or small shapes are'], correctAnswer: 1 },
    { id: 'ac9', question: 'What does VALUE mean in art?', options: ['How much a painting is worth', 'The lightness or darkness of a color', 'The size of an artwork', 'The subject of a painting'], correctAnswer: 1 },
    { id: 'ac10', question: 'Which color combination creates the most visual contrast?', options: ['Blue and purple', 'Red and orange', 'Black and white', 'Yellow and green'], correctAnswer: 2 },
    { id: 'ac11', question: 'What is the color wheel used for?', options: ['To measure how much paint you need', 'To show how colors relate to each other and how to mix them', 'To choose which brushes to use', 'To describe the subject of a painting'], correctAnswer: 1 },
    { id: 'ac12', question: 'In a painting, what does FOREGROUND mean?', options: ['The background behind everything', 'The middle of the painting', 'The part of the scene closest to the viewer', 'The sky at the top of the painting'], correctAnswer: 2 },
    { id: 'ac13', question: 'What is PERSPECTIVE in art?', options: ['The colors chosen by an artist', 'A technique that makes distant objects look smaller to create depth', 'How rough or smooth a painting looks', 'The frame around a painting'], correctAnswer: 1 },
    { id: 'ac14', question: 'When an artist uses mostly cool colors in a painting, what feeling does it often create?', options: ['Energy and excitement', 'Warmth and happiness', 'Calm, peaceful, or sometimes sadness', 'Anger and tension'], correctAnswer: 2 },
    { id: 'ac15', question: 'What is a COLOR SCHEME?', options: ['The brushes used in a painting', 'A planned group of colors that work well together in a piece of art', 'How big a canvas is', 'The style of art being made'], correctAnswer: 1 },
  ],
};

const famousArtists = {
  id: 'art-artists',
  title: 'Art History & Styles',
  emoji: '🖼️',
  questions: [
    { id: 'aa1', question: 'Leonardo da Vinci painted the Mona Lisa. Besides painting, what else was he known for?', options: ['Music and dancing', 'Science, inventions, and architecture', 'Writing novels and poetry', 'Sculpting only'], correctAnswer: 1 },
    { id: 'aa2', question: 'Vincent van Gogh\'s "The Starry Night" is known for its…', options: ['Perfectly still, realistic appearance', 'Swirling brushstrokes and bold, expressive style', 'Very tiny, detailed dots of color', 'Geometric shapes and straight lines'], correctAnswer: 1 },
    { id: 'aa3', question: 'IMPRESSIONISM is an art style that focuses on…', options: ['Perfect, realistic details', 'Geometric shapes and angles', 'Capturing the feeling and light of a moment with loose brushstrokes', 'Only painting portraits of royalty'], correctAnswer: 2 },
    { id: 'aa4', question: 'CUBISM, created by Picasso and Braque, shows objects…', options: ['From only one realistic point of view', 'From multiple angles at the same time using geometric shapes', 'Using only three colors', 'As blurry and unfocused'], correctAnswer: 1 },
    { id: 'aa5', question: 'Frida Kahlo is famous for often painting…', options: ['Seascapes and ocean scenes', 'Self-portraits that expressed her pain and Mexican heritage', 'Only landscapes of Mexico', 'Abstract geometric designs'], correctAnswer: 1 },
    { id: 'aa6', question: 'Georges Seurat created a technique of painting with tiny dots of color called…', options: ['Cubism', 'Impressionism', 'Pointillism', 'Surrealism'], correctAnswer: 2 },
    { id: 'aa7', question: 'Salvador Dalí is known for painting SURREALIST art. Surrealism often features…', options: ['Realistic portraits of important people', 'Dream-like, strange, or impossible scenes', 'Simple landscapes with bright colors', 'Geometric shapes in black and white'], correctAnswer: 1 },
    { id: 'aa8', question: 'Michelangelo\'s "David" is a famous example of what type of art?', options: ['Oil painting', 'Watercolor', 'Sculpture (carved from marble)', 'Fresco (painted on wet plaster)'], correctAnswer: 2 },
    { id: 'aa9', question: 'What art movement did artists like Monet and Renoir belong to?', options: ['Cubism', 'Surrealism', 'Impressionism', 'Abstract Expressionism'], correctAnswer: 2 },
    { id: 'aa10', question: 'What is a SELF-PORTRAIT?', options: ['A painting of a beautiful landscape', 'A painting an artist makes of themselves', 'A painting given as a gift', 'A painting of a city at night'], correctAnswer: 1 },
    { id: 'aa11', question: 'Andy Warhol is famous for his POP ART, which often featured…', options: ['Ancient Greek mythology', 'Everyday commercial objects and celebrities, repeated in bright colors', 'Abstract splashes of paint', 'Dark and gloomy medieval scenes'], correctAnswer: 1 },
    { id: 'aa12', question: 'What is the difference between 2D and 3D art?', options: ['2D art uses color; 3D art does not', '2D art is flat (height and width); 3D art has depth (you can see all sides)', '2D art is always smaller than 3D art', '2D art is painted; 3D art is always made of metal'], correctAnswer: 1 },
    { id: 'aa13', question: 'A STILL LIFE is a painting or drawing of…', options: ['A landscape with mountains and rivers', 'A person or group of people', 'Non-living objects arranged together', 'An imaginary fantasy scene'], correctAnswer: 2 },
    { id: 'aa14', question: 'Katsushika Hokusai created "The Great Wave off Kanagawa." He was from which country?', options: ['China', 'Korea', 'Japan', 'India'], correctAnswer: 2 },
    { id: 'aa15', question: 'What does ABSTRACT art typically show?', options: ['Exact, realistic images of real objects', 'Shapes, colors, and forms that may not represent real things', 'Only landscapes painted outside', 'Only portraits of important people'], correctAnswer: 1 },
  ],
};

const artQuizzes = [colors, famousArtists];
export default artQuizzes;
