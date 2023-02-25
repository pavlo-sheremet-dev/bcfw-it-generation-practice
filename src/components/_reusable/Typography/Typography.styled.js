import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fs.title};
  font-weight: ${({ theme }) => theme.fw.title};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const SubTitle = styled.p`
  font-size: ${({ theme }) => theme.fs.xl};
  font-weight: ${({ theme }) => theme.fw.subTitle};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fs.m};
`;
