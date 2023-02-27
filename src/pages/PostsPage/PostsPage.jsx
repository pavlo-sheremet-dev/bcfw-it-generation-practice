import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  Loader,
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

const PostsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);

  const params = useMemo(() => ({ page }), [page]);
  const { data, error, loading } = useHttpRequest(fetchPosts, params);

  useEffect(() => {
    if (error) console.log('error', error);
  }, [error]);

  const setPage = page => {
    setSearchParams({ page });
  };

  const register = usePagination({
    onChange: setPage,
    currentPage: page,
    perPage: PER_PAGE,
    totalItems: Number(data?.totalPosts ?? 1),
    showTotal: true,
  });

  return (
    <>
      <Section>
        <Container>
          <Title>POSTS</Title>
          <Text>{textContent.postsPageDescription}</Text>

          <Wrapper>
            <Pagination {...register} />
            <PostHeadersList posts={data?.posts} />
            {loading && <Loader />}
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default PostsPage;
