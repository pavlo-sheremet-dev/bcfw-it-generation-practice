import { StyledButton } from './Button.styled';

export const Button = ({ label, onClick = () => {}, ...restProps }) => {
  return (
    <StyledButton type="button" onClick={onClick} {...restProps}>
      {label}
    </StyledButton>
  );
};
