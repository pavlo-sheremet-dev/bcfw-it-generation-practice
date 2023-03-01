import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMobileMenu } from 'redux/global/slice';
import { Overlay } from './BackDrop.styled';

export const BackDrop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') {
        dispatch(toggleMobileMenu());
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [dispatch]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      dispatch(toggleMobileMenu());
    }
  };

  return (
    <Overlay
      key="backDrop"
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClick}
    />
  );
};

export default BackDrop;
