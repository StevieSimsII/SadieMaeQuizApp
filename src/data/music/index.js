const instruments = {
  id: 'music-instruments',
  title: 'Musical Instruments & Families',
  emoji: '🎸',
  questions: [
    { id: 'mi1', question: 'What are the FOUR instrument families in an orchestra?', options: ['Brass, Woodwinds, Strings, Percussion', 'Piano, Guitar, Drums, Flute', 'Wind, Plucked, Hit, Blown', 'Heavy, Light, Loud, Soft'], correctAnswer: 0 },
    { id: 'mi2', question: 'The WOODWIND family gets its name because instruments were originally made of…', options: ['Metal tubing', 'Animal skin', 'Wood (though many are now metal)', 'String and wire'], correctAnswer: 2 },
    { id: 'mi3', question: 'Which instrument is in the WOODWIND family?', options: ['Trumpet', 'Trombone', 'Oboe', 'French Horn'], correctAnswer: 2 },
    { id: 'mi4', question: 'Which instrument is in the BRASS family?', options: ['Clarinet', 'French Horn', 'Bassoon', 'Flute'], correctAnswer: 1 },
    { id: 'mi5', question: 'In a BRASS instrument, how is the sound made?', options: ['Blowing across a hole', 'Blowing through a reed', 'Buzzing your lips into a mouthpiece', 'Pressing keys and blowing'], correctAnswer: 2 },
    { id: 'mi6', question: 'Which of these is a STRING instrument?', options: ['Timpani', 'Tuba', 'Cello', 'Oboe'], correctAnswer: 2 },
    { id: 'mi7', question: 'A CELLO is played how?', options: ['You pluck the strings while standing', 'You sit and draw a bow across the strings', 'You hold it under your chin and bow', 'You press keys while blowing'], correctAnswer: 1 },
    { id: 'mi8', question: 'The PIANO is unique because it is both a STRING and what other type of instrument?', options: ['Brass', 'Woodwind', 'Percussion', 'Electronic'], correctAnswer: 2 },
    { id: 'mi9', question: 'Which instrument is the largest in the STRING family?', options: ['Violin', 'Viola', 'Cello', 'Double Bass'], correctAnswer: 3 },
    { id: 'mi10', question: 'A TIMPANI (kettledrum) belongs to which instrument family?', options: ['Strings', 'Woodwinds', 'Brass', 'Percussion'], correctAnswer: 3 },
    { id: 'mi11', question: 'Why does a bigger string instrument (like a bass) make lower sounds than a smaller one (like a violin)?', options: ['It has more strings', 'Longer, thicker strings vibrate more slowly and make lower pitches', 'It is held differently', 'It uses a bigger bow'], correctAnswer: 1 },
    { id: 'mi12', question: 'The person who stands in front of the orchestra and leads the musicians is called the…', options: ['Composer', 'Soloist', 'Conductor', 'First Violinist'], correctAnswer: 2 },
    { id: 'mi13', question: 'What does a CONDUCTOR use to lead an orchestra?', options: ['A microphone', 'A baton (a thin stick)', 'Sheet music only', 'A metronome'], correctAnswer: 1 },
    { id: 'mi14', question: 'What is a REED in a woodwind instrument?', options: ['A type of mouthpiece made of brass', 'A thin piece of material that vibrates to make sound when you blow', 'The keys you press on the instrument', 'The bell (wide end) of the instrument'], correctAnswer: 1 },
    { id: 'mi15', question: 'The TROMBONE changes pitch using a…', options: ['Series of keys or valves', 'Slide that moves in and out', 'Reed inside the mouthpiece', 'Turning a peg on the side'], correctAnswer: 1 },
  ],
};

const notesRhythm = {
  id: 'music-notes',
  title: 'Reading Music & Theory',
  emoji: '🎵',
  questions: [
    { id: 'mn1', question: 'Music is written on five lines and four spaces called a…', options: ['Chorus', 'Scale', 'Staff (or stave)', 'Clef'], correctAnswer: 2 },
    { id: 'mn2', question: 'A WHOLE NOTE gets how many beats in 4/4 time?', options: ['1', '2', '3', '4'], correctAnswer: 3 },
    { id: 'mn3', question: 'A HALF NOTE gets how many beats in 4/4 time?', options: ['1', '2', '3', '4'], correctAnswer: 1 },
    { id: 'mn4', question: 'A QUARTER NOTE gets how many beats in 4/4 time?', options: ['1', '2', '3', '4'], correctAnswer: 0 },
    { id: 'mn5', question: 'What does the time signature "4/4" tell a musician?', options: ['There are 4 measures in the song', 'There are 4 beats per measure and the quarter note gets one beat', 'The song should be played 4 times', 'There are 4 instruments playing'], correctAnswer: 1 },
    { id: 'mn6', question: 'In Italian music terms, FORTE (f) means…', options: ['Slow', 'Fast', 'Soft', 'Loud'], correctAnswer: 3 },
    { id: 'mn7', question: 'In Italian music terms, PIANO (p) means…', options: ['Fast', 'Loud', 'Soft', 'Medium'], correctAnswer: 2 },
    { id: 'mn8', question: 'ALLEGRO is an Italian term meaning the music should be played…', options: ['Very slowly', 'Moderately', 'Fast and lively', 'Very softly'], correctAnswer: 2 },
    { id: 'mn9', question: 'What is a REST in music notation?', options: ['A sign meaning to play very softly', 'A symbol showing a period of silence for a specific number of beats', 'The end of a song', 'A sign to play the same note twice'], correctAnswer: 1 },
    { id: 'mn10', question: 'What does CRESCENDO mean in music?', options: ['Getting gradually softer', 'Getting gradually louder', 'Staying at the same volume', 'Playing very fast'], correctAnswer: 1 },
    { id: 'mn11', question: 'What is a CHORD?', options: ['A single note played alone', 'Three or more notes played at the same time', 'The words of a song', 'The speed of music'], correctAnswer: 1 },
    { id: 'mn12', question: 'Ludwig van Beethoven was remarkable because he composed some of his greatest music…', options: ['While only 5 years old', 'After becoming completely deaf', 'While living on a boat', 'In less than one day each'], correctAnswer: 1 },
    { id: 'mn13', question: 'Wolfgang Amadeus Mozart began performing and composing music at what extraordinarily young age?', options: ['Age 3–4', 'Age 10', 'Age 12', 'Age 16'], correctAnswer: 0 },
    { id: 'mn14', question: 'What is HARMONY in music?', options: ['The main melody you hum or sing', 'Notes played or sung together that support the melody', 'The beat you clap to', 'The speed of the song'], correctAnswer: 1 },
    { id: 'mn15', question: 'A musical SCALE is…', options: ['A tool for measuring instruments', 'A series of notes going up or down in a set pattern of steps', 'How loud or soft music is', 'The number of beats per measure'], correctAnswer: 1 },
  ],
};

const musicQuizzes = [instruments, notesRhythm];
export default musicQuizzes;
