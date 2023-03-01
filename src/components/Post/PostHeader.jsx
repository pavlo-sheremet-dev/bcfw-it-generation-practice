import { MotionListItem, PostDate, Link } from './Post.styled';
import { formatDistanceToNow } from 'date-fns';
import { Text } from 'components';

import { useLocation } from 'react-router-dom';

export const PostHeader = ({ id, title, createdAt, counter }) => {
  const location = useLocation();
  const date = formatDistanceToNow(new Date(createdAt));

  return (
    <MotionListItem
      initial={{ opacity: 0, translateY: Boolean(counter % 2) ? 10 : -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: counter * 0.1, delay: counter * 0.05 }}
    >
      <Link to={id} state={{ from: location }}>
        <Text>{title}</Text>
        <PostDate>{date}</PostDate>
      </Link>
    </MotionListItem>
  );
};
