import React from 'react';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import useDropdown from 'hooks/useDropdown';
import Dropdown from 'components/_common/Dropdown';
import DeleteMovie from 'components/_common/DeleteMovie';
import Modal from 'components/_common/Modal';
import useOpenAndClose from 'hooks/useOpenAndClose';
import CreateAndEditMovie from 'components/_common/CreateAndEditMovie';
import { MOVIE_OPTIONS } from 'config';
import { Movie } from 'redux/types';
import styles from './styles.module.scss';

type MoviesListItemProps = Movie & {
  className?: string;
};

const MoviesListItem: React.FC<MoviesListItemProps> = ({
  id,
  poster_path,
  title,
  genres,
  release_date,
  className,
}) => {
  const history = useHistory();
  const { value, isDropdownVisible, onOptionClick, onToggleDropdownVisibility, onCloseDropdown } =
    useDropdown();
  const {
    isOpen: isOpenDeleteMovieModal,
    onClose: onCloseDeleteMovieModal,
    onOpen: onOpenDeleteMovieModal,
  } = useOpenAndClose({ onCloseCallback: () => onOptionClick('') });
  const {
    isOpen: isOpenEditMovieModal,
    onClose: onCloseEditMovieModal,
    onOpen: onOpenEditMovieModal,
  } = useOpenAndClose({ onCloseCallback: () => onOptionClick('') });

  const handleClickOnMovie = () => {
    history.push(`/details/${id}`);
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  React.useEffect(() => {
    if (value === 'edit') {
      onOpenEditMovieModal();
    }
    if (value === 'delete') {
      onOpenDeleteMovieModal();
    }
  }, [value, onOpenEditMovieModal, onOpenDeleteMovieModal]);

  return (
    <>
      <li className={cn(styles.root, className)} onClick={handleClickOnMovie}>
        <Dropdown
          options={MOVIE_OPTIONS}
          isOpen={isDropdownVisible}
          onToggle={onToggleDropdownVisibility}
          onClose={onCloseDropdown}
          onOptionClick={onOptionClick}
          className={styles.dropdown}
        />

        <img src={poster_path} alt={title} className={styles.image} />

        <div className={styles.titleAndImageWrapper}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.year}>{release_date}</span>
        </div>

        <h5 className={styles.genre}>
          {genres.map((genre) => (
            <span key={genre}> {genre} |</span>
          ))}
        </h5>
      </li>

      {isOpenDeleteMovieModal && (
        <Modal isOpen={isOpenDeleteMovieModal} onClose={onCloseDeleteMovieModal}>
          <DeleteMovie onConfirm={onCloseDeleteMovieModal} />
        </Modal>
      )}

      {isOpenEditMovieModal && (
        <Modal isOpen={isOpenEditMovieModal} onClose={onCloseEditMovieModal}>
          <CreateAndEditMovie action="edit" />
        </Modal>
      )}
    </>
  );
};

export default React.memo(MoviesListItem);
