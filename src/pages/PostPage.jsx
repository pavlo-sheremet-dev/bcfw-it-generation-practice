import { useState } from 'react';
import { Container, Section, Text, Title } from 'components';
import { useParams } from 'react-router-dom';
import { useHttpRequest } from 'hooks/useHttpRequest';

const PostPage = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  // const { } = useHttpRequest()

  return (
    <>
      <Section>
        <Container>
          <Title>PAGE 1</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            temporibus assumenda, numquam facilis in vitae deserunt amet iusto
            molestiae alias.
          </Text>
        </Container>
      </Section>
    </>
  );
};

export default PostPage;
