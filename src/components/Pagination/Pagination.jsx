import { useTheme } from '@emotion/react';
import Paginate from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { MotionBox } from './Pagination.styled';

export const Pagination = registerProps => {
  const { colors } = useTheme();

  return (
    <MotionBox
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Paginate
        {...registerProps}
        prevIcon={<BsChevronLeft color={colors.text} size={20} />}
        nextIcon={<BsChevronRight color={colors.text} size={20} />}
        className="rumba"
      />
    </MotionBox>
  );
};
