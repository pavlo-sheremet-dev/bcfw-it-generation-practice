import styled from '@emotion/styled';
import { Section as S, Container as C } from 'components';

export const Section = styled(S)`
  display: flex;
  min-height: 100%;
  padding-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const Container = styled(C)`
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
