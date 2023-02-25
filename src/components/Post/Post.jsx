import { Box, PostDate, Link } from './Post.styled';
import { formatDistanceToNow } from 'date-fns';
import { Text } from 'components';

export const PostHeadersList = ({ posts }) => {
  if (!posts?.length) return;
  return (
    <ul>
      {posts.map(({ id, createdAt, title }) => (
        <PostHeader
          key={id}
          id={id}
          createdAt={createdAt}
          title={title}
          as="li"
        />
      ))}
    </ul>
  );
};

export const PostHeader = ({ id, title, createdAt, as = null }) => {
  const date = formatDistanceToNow(new Date(createdAt));
  return (
    <Box as={as}>
      <Link to={id}>
        <Text>{title}</Text>
        <PostDate>{date}</PostDate>
      </Link>
    </Box>
  );
};
