import { useEffect } from 'react';
import { Overlay } from './BackDrop.styled';

export const BackDrop = ({ onClose, children }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return <Overlay onClick={handleClick}>{children}</Overlay>;
};

export default BackDrop;
