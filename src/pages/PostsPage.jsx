import { useEffect, useMemo, useState } from 'react';
import {
  Container,
  Loader,
  PostHeadersList,
  Section,
  Text,
  Title,
} from 'components';
import { fetchPosts, PER_PAGE } from 'services/api';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import { textContent } from 'data/textContent';
import { useHttpRequest } from 'hooks/useHttpRequest';

const PostsPage = () => {
  const [page, setPage] = useState(1);

  const params = useMemo(() => ({ page }), [page]);

  const { data, error, loading } = useHttpRequest(fetchPosts, params);

  useEffect(() => {
    if (error) console.log('error', error);
  }, [error]);

  return (
    <>
      {loading && <Loader />}
      <Section>
        <Container>
          <Title>POSTS</Title>
          <Text style={{ marginBottom: 20 }}>
            {textContent.postsPageDescription}
          </Text>

          <PostHeadersList posts={data?.posts} />

          <Pagination
            onChange={setPage}
            current={page}
            total={data?.totalPosts}
            pageSize={PER_PAGE}
            locale="en-US"
            className={'PAGINATION'}
          />
        </Container>
      </Section>
    </>
  );
};

export default PostsPage;
