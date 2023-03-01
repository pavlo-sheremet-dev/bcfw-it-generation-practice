// import { useState } from 'react';
import { Container, Loader, Section, Text, Title } from 'components';
import { useHttpRequest } from 'hooks';
import { useEffect, useMemo } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchPost } from 'services/api';
// import { useHttpRequest } from 'hooks/useHttpRequest';

const PostPage = () => {
  // const [post, setPost] = useState(null);
  const { postId: id } = useParams();
  const location = useLocation();

  const params = useMemo(() => ({ id }), [id]);

  const { data, error, loading } = useHttpRequest(fetchPost, params);

  const post = data?.post;

  useEffect(() => {
    if (error) console.log('error', error);
  }, [error]);

  if (!data || loading) return <Loader />;

  return (
    <>
      <Section>
        <Container>
          <Title>POST</Title>
          <Link
            to={location.state?.from ?? '/posts'}
            style={{ marginBottom: 20, display: 'block' }}
          >
            GO BACK
          </Link>
          <Title>{post.title}</Title>
          <Text>{post.text}</Text>
        </Container>
      </Section>
    </>
  );
};

export default PostPage;
