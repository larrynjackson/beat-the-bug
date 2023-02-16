import { useState, useEffect, useCallback } from 'react';
import { words } from './wordList';
import BugDrawing from './BugDrawing';
import Keyboard from './Keyboard';
import BugWord from './BugWord';
import { BODY_PARTS } from './BugDrawing';

import Cloud from './Cloud';
import WordFileReader from './filesystem/WordFileReader';

function App() {
  const [wordList, setWordList] = useState<string[]>(words);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string>(getWord());

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= BODY_PARTS.length;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  function getWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== 'Enter') return;

      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(wordList[Math.floor(Math.random() * wordList.length)]);
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [wordList]);

  function handleUpdateList(newList: string[]) {
    setGuessedLetters([]);
    setWordList(newList);

    setWordToGuess(getWord());
  }

  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'grid',
          flexDirection: 'column',
          gap: '1rem',
          marginLeft: '200px',
          alignItems: 'right',
        }}
      >
        <WordFileReader handleUpdateList={handleUpdateList} />
        <p style={{ fontSize: '2rem', marginTop: 0 }}>
          File format ex: (dog, cat, hat, rat) Press Enter after loading!
        </p>
      </div>

      <div style={{ fontSize: '2rem', textAlign: 'center' }}>
        {!isWinner && !isLoser && (
          <div>
            <h3>Let's Play</h3>
            <h1>Beat The Bug!</h1>
          </div>
        )}
        {isWinner && (
          <div>
            <h1>Winner!</h1> <h3>Enter key to play again</h3>
          </div>
        )}
        {isLoser && (
          <div>
            <h1>Nice Try</h1>
            <h3>Refresh to play again</h3> <Cloud />
          </div>
        )}
      </div>

      <div
        style={{
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          margin: '0 auto',
          alignItems: 'center',
        }}
      >
        <BugDrawing numberOfGuesses={incorrectLetters.length} />

        <BugWord
          reveal={isLoser}
          guessedLetters={guessedLetters}
          wordToGuess={wordToGuess}
        />
        <div style={{ alignSelf: 'stretch' }}>
          <Keyboard
            disabled={isWinner || isLoser}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </>
  );
}

export default App;
