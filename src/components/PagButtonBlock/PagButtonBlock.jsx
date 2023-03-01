import { Button, ButtonBox } from './PagButtonBlock.styled';

export const PagButtonBlock = ({ changePage, page, totalPages, disabled }) => {
  const decrement = () => changePage(false);
  const increment = () => changePage(true);
  return (
    <ButtonBox
      initial={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2, delay: 0.2 }}
    >
      <Button
        label={'Prev'}
        disabled={disabled || Number(page) === 1}
        onClick={decrement}
      />
      <div>
        {page} of {totalPages}
      </div>
      <Button
        label={'Next'}
        disabled={disabled || Number(page) === Number(totalPages)}
        onClick={increment}
      />
    </ButtonBox>
  );
};

export default PagButtonBlock;
