import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMobileMenu } from 'redux/global/slice';
import { Overlay } from './BackDrop.styled';

export const BackDrop = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEsc = e => {
      console.log('e.code', e.code);
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

  return <Overlay onClick={handleClick}>{children}</Overlay>;
};

export default BackDrop;
