import styles from '../css/Dropdown.module.css';

type DropDownMenuProps = {
  open: boolean;
  trigger: any;
  menu: any[];
};

export function DropDownMenu({ open, trigger, menu }: DropDownMenuProps) {
  return (
    <div className={styles.dropdown}>
      {trigger}
      {open ? (
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li key={index} className={styles.menuItem}>
              {menuItem}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
