import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const MotionBox = styled(motion.div)`
  & .rc-pagination {
    display: flex;
    flex-wrap: wrap;
  }

  & .rc-pagination-item {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.text};
    border-radius: 2px;
    transition: all 0.2s;
    margin-right: 6px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  & .rc-pagination-total-text {
    margin-right: auto;
  }

  & .rc-pagination-item a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.2s;
    padding: 0;
  }

  & .rc-pagination-item:focus,
  & .rc-pagination-item:hover {
    border-color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => theme.colors.brandHover};
  }

  & .rc-pagination-item.rc-pagination-item-active,
  & .rc-pagination-item.rc-pagination-item-active {
    border-color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => theme.colors.brandHover};
  }

  & .rc-pagination-item:focus a,
  & .rc-pagination-item:hover a {
    color: ${({ theme }) => theme.colors.text};
  }

  & .rc-pagination-item-active a {
    color: ${({ theme }) => theme.colors.text};
  }

  & .rc-pagination-item-active:focus,
  & .rc-pagination-item-active:hover {
    border-color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => theme.colors.brandHover};
  }

  & .rc-pagination-item-active:focus a,
  & .rc-pagination-item-active:hover a {
    ${({ theme }) => theme.colors.brand};
  }

  & .rc-pagination-jump-prev button,
  & .rc-pagination-jump-next button {
    color: ${({ theme }) => theme.colors.gray};
  }

  & .rc-pagination-prev,
  & .rc-pagination-next,
  & .rc-pagination-jump-prev,
  & .rc-pagination-jump-next {
    ${({ theme }) => theme.colors.text};
    max-width: 24px;
    min-width: 24px;
  }

  & .rc-pagination-prev:hover button,
  & .rc-pagination-next:hover button {
    border-color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => theme.colors.brandHover};
  }

  & .rc-pagination-prev svg,
  & .rc-pagination-next svg {
    fill: ${({ theme }) => theme.colors.text};
    transition: fill 0.2s;
  }

  & .rc-pagination-prev:hover svg,
  & .rc-pagination-next:hover svg,
  & .rc-pagination-prev:focus svg,
  & .rc-pagination-next:focus svg {
    fill: ${({ theme }) => theme.colors.brand};
  }

  & .rc-pagination-prev:focus .rc-pagination-item-link,
  & .rc-pagination-next:focus .rc-pagination-item-link,
  & .rc-pagination-prev:hover .rc-pagination-item-link,
  & .rc-pagination-next:hover .rc-pagination-item-link {
    color: ${({ theme }) => theme.colors.brand};
    border-color: ${({ theme }) => theme.colors.brand};
    background-color: ${({ theme }) => theme.colors.brandHover};
  }

  & .rc-pagination-prev,
  & .rc-pagination-next {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  & .rc-pagination-prev,
  & .rc-pagination-jump-prev,
  & .rc-pagination-jump-next {
    margin-right: 7px;
  }
`;
