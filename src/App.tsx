import { useState, useEffect, useCallback } from 'react';

import { DropDownMenu } from './components/Dropdown';

import LadyBugDrawing from './components/LadyBugDrawing';
import { LADYBUG_PARTS } from './components/LadyBugDrawing';
import CrazyBugDrawing from './components/CrazyBugDrawing';
import { CRAZYBUG_PARTS } from './components/CrazyBugDrawing';

import GoofyBugDrawing from './components/GoofyBugDrawing';
import { GOOFYBUG_PARTS } from './components/GoofyBugDrawing';

import Keyboard from './components/Keyboard';
import BugWord from './components/BugWord';

import Cloud from './components/Cloud';
import WordFileReader from './filesystem/WordFileReader';
import { kindergarten } from './data/kindergarten';
import { stateWords } from './data/stateList';
import { words } from './data/wordList';
import { countryWords } from './data/countryList';
import { animalWords } from './data/amimalList';

// temp site: https://neon-horse-18b33a.netlify.app

function App() {
  const [activeBug, setActiveBug] = useState('LadyBug');
  const [bugSize, setBugSize] = useState(LADYBUG_PARTS);
  const [wordList, setWordList] = useState<string[]>(kindergarten);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wordToGuess, setWordToGuess] = useState<string>(
    wordList[Math.floor(Math.random() * wordList.length)]
      .toLowerCase()
      .replace(/\s/g, '')
  );

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= bugSize;
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
      setWordToGuess(
        wordList[Math.floor(Math.random() * wordList.length)]
          .toLowerCase()
          .replace(/\s/g, '')
      );
    };

    document.addEventListener('keypress', handler);

    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [wordList]);

  function handleUpdateList(newList: string[]) {
    setOpen(!open);
    setWordList(newList);
    alert('New list is ready. Press the enter key to complete the change.');
  }

  function handleUpdateBug(bug: string) {
    setOpen(!open);
    setGuessedLetters([]);
    switch (bug) {
      case 'LadyBug':
        setActiveBug(bug);
        setBugSize(LADYBUG_PARTS);
        break;
      case 'CrazyBug':
        setActiveBug(bug);
        setBugSize(CRAZYBUG_PARTS);
        break;
      case 'GoofyBug':
        setActiveBug(bug);
        setBugSize(GOOFYBUG_PARTS);
        break;
      default:
        setActiveBug('LadyBug');
        setBugSize(LADYBUG_PARTS);
    }
    alert('New bug is ready.');
  }

  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '20px',
        }}
      >
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
          <p style={{ fontSize: '2rem', marginTop: '0' }}>
            File format ex: (dog, cat, hat, rat) Press Enter after loading!
          </p>
        </div>

        <div style={{ textAlign: 'right', paddingRight: '75px' }}>
          <DropDownMenu
            open={open}
            trigger={
              <button
                style={{ width: '250px', padding: '10px', fontSize: '30px' }}
                onClick={handleOpen}
              >
                Menu
              </button>
            }
            menu={[
              <div
                style={{
                  backgroundColor: 'lightgray',

                  textAlign: 'center',
                  pointerEvents: 'none',
                }}
              >
                <span>words</span>
              </div>,

              <button onClick={() => handleUpdateList(kindergarten)}>
                Default (K)
              </button>,
              <button onClick={() => handleUpdateList(words)}>
                1st grade
              </button>,
              <button onClick={() => handleUpdateList(animalWords)}>
                Animals
              </button>,
              <button onClick={() => handleUpdateList(stateWords)}>
                States
              </button>,
              <button onClick={() => handleUpdateList(countryWords)}>
                Countries
              </button>,
              <div
                style={{
                  backgroundColor: 'lightgray',

                  textAlign: 'center',
                  pointerEvents: 'none',
                }}
              >
                <span>bugs</span>
              </div>,
              <button onClick={() => handleUpdateBug('LadyBug')}>
                LadyBug
              </button>,

              <button onClick={() => handleUpdateBug('CrazyBug')}>
                CrazyBug
              </button>,

              <button onClick={() => handleUpdateBug('GoofyBug')}>
                GoofyBug
              </button>,
            ]}
          />
        </div>
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
        {activeBug === 'LadyBug' && (
          <LadyBugDrawing numberOfGuesses={incorrectLetters.length} />
        )}
        {activeBug === 'CrazyBug' && (
          <CrazyBugDrawing numberOfGuesses={incorrectLetters.length} />
        )}
        {activeBug === 'GoofyBug' && (
          <GoofyBugDrawing numberOfGuesses={incorrectLetters.length} />
        )}

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
