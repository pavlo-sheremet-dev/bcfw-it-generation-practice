import { useTheme } from '@emotion/react';
import Paginate from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Box } from './Pagination.styled';

export const Pagination = registerProps => {
  const { colors } = useTheme();

  return (
    <Box>
      <Paginate
        {...registerProps}
        prevIcon={<BsChevronLeft color={colors.text} size={20} />}
        nextIcon={<BsChevronRight color={colors.text} size={20} />}
        className="rumba"
      />
    </Box>
  );
};
