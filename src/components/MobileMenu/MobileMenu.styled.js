import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MotionBox = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.mainBackground};
  padding-top: 20px;

  border-left: 1px solid ${({ theme }) => theme.colors.text};

  & .close-button {
    margin-left: auto;
    margin-bottom: 20px;
  }
`;
