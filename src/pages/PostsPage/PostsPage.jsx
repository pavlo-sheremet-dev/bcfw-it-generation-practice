import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  Loader,
  PagButtonBlock,
  Pagination,
  PostHeadersList,
  Section,
  Text,
  Title,
} from 'components';
import { Wrapper } from './PostsPage.styled';

import { fetchPosts, PER_PAGE } from 'services/api';
import { textContent } from 'data/textContent';
import { useHttpRequest, usePagination } from 'hooks';
import { useMedia } from 'context/MediaContext';

const PostsPage = () => {
  const { isMobile } = useMedia();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  const params = useMemo(() => ({ page }), [page]);
  const { data, error, loading } = useHttpRequest(fetchPosts, params);
  const totalPages = data?.pages ?? 1;
  const totalPosts = Number(data?.totalPosts ?? 1);

  useEffect(() => {
    if (error) console.log('error', error);
  }, [error]);

  const setPage = page => {
    setSearchParams({ page });
  };

  const changePage = (isIncrement = true) =>
    setSearchParams({ page: page + (isIncrement ? 1 : -1) });

  const register = usePagination({
    onChange: setPage,
    currentPage: page,
    perPage: PER_PAGE,
    totalItems: totalPosts,
    showTotal: true,
  });

  const showButtonBox = isMobile && totalPages > 1;
  const showPosts = !!data?.posts.length;

  return (
    <Section>
      <Container>
        <Title>POSTS</Title>
        <Text>{textContent.postsPageDescription}</Text>
        <Wrapper>
          {!isMobile && <Pagination {...register} />}
          {showPosts && <PostHeadersList posts={data?.posts} />}
          {showButtonBox && (
            <PagButtonBlock
              changePage={changePage}
              disabled={loading}
              page={page}
              totalPages={totalPages}
            />
          )}
          {loading && <Loader />}
        </Wrapper>
      </Container>
    </Section>
  );
};

export default PostsPage;
