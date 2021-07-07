import React from 'react';

type Props = { onCloseCallback?: () => void };

const useOpenAndClose = ({ onCloseCallback = () => {} }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = React.useCallback(() => {
    onCloseCallback();
    setIsOpen(false);
  }, []);

  const handleOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleToggle = React.useCallback(() => {
    setIsOpen((prevState) => {
      if (!prevState) {
        onCloseCallback();
      }

      return !prevState;
    });
  }, []);

  return {
    isOpen,
    onClose: handleClose,
    onOpen: handleOpen,
    onToggle: handleToggle,
  };
};

export default useOpenAndClose;
