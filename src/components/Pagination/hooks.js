export const usePagination = ({
  onChange,
  currentPage,
  totalItems,
  perPage,
  locale = 'en-US',
  hideOnSinglePage = true,
  showTotal = true,
}) => ({
  onChange,
  current: currentPage,
  total: totalItems,
  pageSize: perPage,
  locale,
  hideOnSinglePage,
  showTotal: showTotal
    ? (total, [from, to]) => `${from} - ${to} of ${total}`
    : null,
});
