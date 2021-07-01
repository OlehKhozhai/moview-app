import React from 'react';

import useOpenAndClose from 'hooks/useOpenAndClose';

type Props = {
  defaultValue?: string;
};

const useDropdown = ({
  defaultValue,
}: Props): {
  value: string;
  onOptionClick: (option: string) => void;
  isDropdownVisible: boolean;
  onToggleDropdownVisibility: () => void;
  onCloseDropdown: () => void;
} => {
  const [value, setValue] = React.useState(defaultValue || '');
  const { isOpen, onToggle, onClose } = useOpenAndClose({});

  const handleOptionClick = React.useCallback(
    (option: string) => {
      setValue(option);
      onClose();
    },
    [onClose]
  );

  return {
    value,
    onOptionClick: handleOptionClick,
    isDropdownVisible: isOpen,
    onToggleDropdownVisibility: onToggle,
    onCloseDropdown: onClose,
  };
};

export default useDropdown;
