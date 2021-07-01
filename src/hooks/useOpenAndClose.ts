import React from 'react';

type Props = { onCloseCallback?: () => void };

const useOpenAndClose = ({
  onCloseCallback,
}: Props): {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onToggle: () => void;
} => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    if (onCloseCallback) {
      onCloseCallback();
    }

    setIsOpen(false);
  }, [onCloseCallback]);

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleToggle = React.useCallback(() => {
    setIsOpen((prevState) => {
      if (!prevState && onCloseCallback) {
        onCloseCallback();
      }

      return !prevState;
    });
  }, [onCloseCallback]);

  return {
    isOpen,
    onClose: handleClose,
    onOpen: handleOpen,
    onToggle: handleToggle,
  };
};

export default useOpenAndClose;
