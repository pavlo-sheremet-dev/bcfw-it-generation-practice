import { StyledButton } from './Button.styled';

export const Button = ({
  label,
  onClick = () => {},
  type = 'button',
  ...restProps
}) => {
  return (
    <StyledButton type={type} onClick={onClick} {...restProps}>
      {label}
    </StyledButton>
  );
};
