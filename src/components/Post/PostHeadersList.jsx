import { PostHeader } from './PostHeader';

export const PostHeadersList = ({ posts }) => {
  return (
    <ul>
      {posts.map(({ id, createdAt, title }, idx) => (
        <PostHeader
          key={id}
          id={id}
          createdAt={createdAt}
          title={title}
          counter={idx + 1}
        />
      ))}
    </ul>
  );
};
