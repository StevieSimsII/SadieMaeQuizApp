const instruments = {
  id: 'music-instruments',
  title: 'Musical Instruments',
  emoji: '🎸',
  questions: [
    { id: 'mi1', question: 'Which instrument do you BLOW to make sound?', options: ['Drums', 'Guitar', 'Flute', 'Piano'], correctAnswer: 2 },
    { id: 'mi2', question: 'Which instrument has black and white keys?', options: ['Violin', 'Piano', 'Drums', 'Trumpet'], correctAnswer: 1 },
    { id: 'mi3', question: 'Which instrument do you HIT to make a beat?', options: ['Flute', 'Violin', 'Drums', 'Harp'], correctAnswer: 2 },
    { id: 'mi4', question: 'Which instrument has strings that you pluck or strum?', options: ['Tuba', 'Guitar', 'Flute', 'Drums'], correctAnswer: 1 },
    { id: 'mi5', question: 'A VIOLIN is played with what?', options: ['Your fingers', 'A bow (a stick with horse hair)', 'A mallet', 'Two sticks'], correctAnswer: 1 },
    { id: 'mi6', question: 'Which instrument is very large and BRASS shaped like a big loop?', options: ['Flute', 'Violin', 'Tuba', 'Harp'], correctAnswer: 2 },
    { id: 'mi7', question: 'Which of these is a PERCUSSION instrument (you hit it)?', options: ['Flute', 'Xylophone', 'Trumpet', 'Violin'], correctAnswer: 1 },
    { id: 'mi8', question: 'The TRUMPET is a type of which instrument family?', options: ['Strings', 'Woodwinds', 'Percussion', 'Brass'], correctAnswer: 3 },
    { id: 'mi9', question: 'Which instrument is sometimes called the "King of Instruments"?', options: ['Piano', 'Guitar', 'Organ', 'Drums'], correctAnswer: 2 },
    { id: 'mi10', question: 'Which instrument has a long neck, a round body, and strings?', options: ['Drum', 'Flute', 'Guitar', 'Piano'], correctAnswer: 2 },
  ],
};

const notesRhythm = {
  id: 'music-notes',
  title: 'Notes & Music Fun',
  emoji: '🎵',
  questions: [
    { id: 'mn1', question: 'How many notes are in the musical alphabet (A through G)?', options: ['5', '6', '7', '8'], correctAnswer: 2 },
    { id: 'mn2', question: 'What do we call the speed of music?', options: ['Melody', 'Tempo', 'Harmony', 'Rhythm'], correctAnswer: 1 },
    { id: 'mn3', question: 'What is MELODY?', options: ['The beat of a song', 'The main tune you sing or hum', 'How loud the music is', 'The words of a song'], correctAnswer: 1 },
    { id: 'mn4', question: 'Do, Re, Mi, Fa, Sol, La, Ti, Do — this is called a…', options: ['Rhythm', 'Scale', 'Chord', 'Beat'], correctAnswer: 1 },
    { id: 'mn5', question: 'What do we call how LOUD or SOFT music is?', options: ['Tempo', 'Melody', 'Dynamics', 'Harmony'], correctAnswer: 2 },
    { id: 'mn6', question: 'Which word means music played SLOWLY?', options: ['Allegro', 'Largo', 'Forte', 'Piano'], correctAnswer: 1 },
    { id: 'mn7', question: 'What is a LULLABY?', options: ['A dance song', 'A gentle song to help babies sleep', 'A very loud song', 'A funny song'], correctAnswer: 1 },
    { id: 'mn8', question: 'The person who writes music is called a…', options: ['Performer', 'Conductor', 'Composer', 'Listener'], correctAnswer: 2 },
    { id: 'mn9', question: 'What is the BEAT of a song?', options: ['The words', 'The steady pulse you feel and clap to', 'The title', 'The instruments used'], correctAnswer: 1 },
    { id: 'mn10', question: 'Mozart was a famous…', options: ['Painter', 'Scientist', 'Composer', 'Explorer'], correctAnswer: 2 },
  ],
};

const musicQuizzes = [instruments, notesRhythm];
export default musicQuizzes;
