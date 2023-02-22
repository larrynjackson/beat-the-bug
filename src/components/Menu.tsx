import styles from '../css/Menu.module.css';

import { words } from '../data/wordList';
import { animalWords } from '../data/amimalList';
import { countryWords } from '../data/countryList';
import { stateWords } from '../data/stateList';
import { kindergarten } from '../data/kindergarten';

type MenuProps = {
  // eslint-disable-next-line
  handleUpdateList: ([]) => void;
  handleUpdateBug: (bug: string) => void;
};

export function Menu({ handleUpdateList, handleUpdateBug }: MenuProps) {
  return (
    <>
      <div className={styles.dropdown}>
        <button className={styles.dropbtn}>Menu</button>
        <div className={styles.dropdownContent}>
          <span>words</span>
          <span>
            <a href="#" onClick={() => handleUpdateList(kindergarten)}>
              Default (K)
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleUpdateList(words)}>
              1st grade
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleUpdateList(animalWords)}>
              Animals
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleUpdateList(countryWords)}>
              Countries
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleUpdateList(stateWords)}>
              States
            </a>
          </span>

          <span>bugs</span>
          <span>
            <a href="#" onClick={() => handleUpdateBug('LadyBug')}>
              LadyBug
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleUpdateBug('CrazyBug')}>
              CrazyBug
            </a>
          </span>
          <span>
            <a href="#" onClick={() => handleUpdateBug('GoofyBug')}>
              GoofyBug
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
