import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Button as B } from 'components';

export const ButtonBox = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(B)`
  flex-grow: 1;
`;
