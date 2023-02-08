import { BiDollarCircle } from 'react-icons/bi';
import { Avatar, Capital, ForbesItem, Name } from './ForbesListItem.styled';

import { theme } from 'styles/theme';
import { FcBearish, FcBullish } from 'react-icons/fc';
import PropTypes from 'prop-types';

export const ForbesListItem = ({ name, capital, avatar, isIncrease }) => {
  return (
    <ForbesItem>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
      <Capital>
        {capital} <BiDollarCircle color={theme.colors.accent} size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </Capital>
    </ForbesItem>
  );
};

ForbesListItem.propTypes = {
  name: PropTypes.string.isRequired,
  capital: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  isIncrease: PropTypes.bool.isRequired,
};
