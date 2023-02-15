type BugWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

export default function BugWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: BugWordProps) {
  //const word = 'test';
  //const guessedLetters = ['e', 't', 'g'];
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {wordToGuess.split('').map((letter, index) => (
        <span style={{ borderBottom: '.1em solid black' }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? 'visible'
                  : 'hidden',
              color:
                !guessedLetters.includes(letter) && reveal ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
