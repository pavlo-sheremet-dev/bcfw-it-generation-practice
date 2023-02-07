import PropTypes from 'prop-types';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, total, icon: Icon }) => {
  return (
    <StatisticBox>
      <Icon size={25} color={'grey'} />
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
StatisticItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  icon: PropTypes.func.isRequired,
};
