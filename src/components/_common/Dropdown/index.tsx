import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

const options = ['release date', 'rating', 'best 100'];

type DropdownProps = {
  className?: string;
};

const Dropdown: React.FC<DropdownProps> = ({ className }) => {
  const [value, setValue] = React.useState(options[0]);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenDropdownClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.value} onClick={handleOpenDropdownClick}>
        {value}
      </span>

      {isOpen && (
        <ul className={styles.dropdown}>
          {options.map((option) => {
            const handleOptionClick = () => {
              setValue(option);
              setIsOpen(false);
            };

            return (
              <li key={option} className={styles.dropdownOption} onClick={handleOptionClick}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default React.memo(Dropdown);
