import React from 'react';
import cn from 'classnames';

import useDropdown from 'hooks/useDropdown';
import Dropdown from 'components/_common/Dropdown';
import DeleteMovie from 'components/_common/DeleteMovie';
import Modal from 'components/_common/Modal';
import useOpenAndClose from 'hooks/useOpenAndClose';
import CreateAndEditMovie from 'components/_common/CreateAndEditMovie';
import styles from './styles.module.scss';

const options = ['edit', 'delete'];

type MoviesListItemProps = {
  image: string;
  title: string;
  genre: string;
  year: string;
  className?: string;
};

const MoviesListItem: React.FC<MoviesListItemProps> = ({
  image,
  title,
  genre,
  year,
  className,
}) => {
  const { value, isDropdownVisible, onOptionClick, onToggleDropdownVisibility, onCloseDropdown } =
    useDropdown({});
  const {
    isOpen: isOpenDeleteMovieModal,
    onClose: onCloseDeleteMovieModal,
    onOpen: onOpenDeleteMovieModal,
  } = useOpenAndClose({ onCloseCallback: () => onOptionClick('') });
  const { isOpen, onClose, onOpen } = useOpenAndClose({ onCloseCallback: () => onOptionClick('') });

  React.useEffect(() => {
    if (value === 'edit') {
      onOpen();
    }
    if (value === 'delete') {
      onOpenDeleteMovieModal();
    }
  }, [value]);

  return (
    <>
      <li className={cn(styles.root, className)}>
        <Dropdown
          options={options}
          isOpen={isDropdownVisible}
          onToggle={onToggleDropdownVisibility}
          onClose={onCloseDropdown}
          onOptionClick={onOptionClick}
          className={styles.dropdown}
        />

        <img src={image} alt={title} className={styles.image} />

        <div className={styles.titleAndImageWrapper}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.year}>{year}</span>
        </div>

        <h5 className={styles.genre}>{genre}</h5>
      </li>

      {isOpenDeleteMovieModal && (
        <Modal isOpen={isOpenDeleteMovieModal} onClose={onCloseDeleteMovieModal}>
          <DeleteMovie onConfirm={onCloseDeleteMovieModal} />
        </Modal>
      )}

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <CreateAndEditMovie action="edit" />
        </Modal>
      )}
    </>
  );
};

export default React.memo(MoviesListItem);
