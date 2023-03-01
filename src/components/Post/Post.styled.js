import styled from '@emotion/styled';
import { motion } from 'framer-motion';

import { Link as L } from 'react-router-dom';

export const MotionListItem = styled(motion.li)`
  border-left: 1px solid ${({ theme }) => theme.colors.brand};
`;

export const Link = styled(L)`
  display: grid;
  grid-template-columns: 0.78fr 0.2fr;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 20px;
  background-color: transparent;
  transition: background-color 150ms linear;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.brandHover};
  }
`;

export const PostDate = styled.p`
  text-align: end;
`;
