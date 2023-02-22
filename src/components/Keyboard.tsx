import styles from '../css/Keyboard.module.css';

const TOP_KEY_ROW = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const MID_KEY_ROW = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const BOT_KEY_ROW = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

type KeyboardProps = {
  activeLetters: string[];
  disabled?: boolean;
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(65px, 1fr))',
          gap: '.5rem',
        }}
      >
        {TOP_KEY_ROW.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ''}
          ${isInactive ? styles.inactive : ''}`}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
      <br />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, min(75px))',
          gap: '.5rem',
          paddingLeft: '1rem',
        }}
      >
        {MID_KEY_ROW.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ''}
          ${isInactive ? styles.inactive : ''}`}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
      <br />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, min(75px)',
          gap: '.5rem',
          paddingLeft: '2rem',
        }}
      >
        {BOT_KEY_ROW.map((key) => {
          const isActive = activeLetters.includes(key);
          const isInactive = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`${styles.btn} ${isActive ? styles.active : ''}
          ${isInactive ? styles.inactive : ''}`}
              disabled={isInactive || isActive || disabled}
              key={key}
            >
              {key}
            </button>
          );
        })}
      </div>
    </>
  );
}
