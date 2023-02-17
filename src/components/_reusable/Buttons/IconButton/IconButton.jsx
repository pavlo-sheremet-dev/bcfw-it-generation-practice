import { Button } from './BurgerButton.styled';

export const IconButton = ({ onClick, icon: Icon, addClass }) => {
  return (
    <Button type="button" onClick={onClick} className={addClass}>
      <Icon size={25} />
    </Button>
  );
};
