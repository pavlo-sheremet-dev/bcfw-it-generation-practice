import { useDispatch } from 'react-redux';
import { toggleMobileMenu } from 'redux/global/slice';
import { Button } from './BurgerButton.styled';

export const IconButton = ({ icon: Icon, addClass }) => {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(toggleMobileMenu());

  return (
    <Button type="button" onClick={handleClick} className={addClass}>
      <Icon size={25} />
    </Button>
  );
};
