import styled from '@emotion/styled';
import { Section as S, Container as C } from 'components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
  min-height: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Section = styled(S)`
  min-height: 100%;
  display: flex;
`;

export const Container = styled(C)`
  display: flex;
  flex-direction: column;
`;
