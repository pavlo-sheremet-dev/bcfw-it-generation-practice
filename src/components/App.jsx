import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'components';

import HomePage from 'pages/HomePage';
import TeamPage from 'pages/TeamPage';
import PostsPage from 'pages/PostsPage/PostsPage';
import PostPage from 'pages/PostPage';
import SignUpPage from 'pages/SignUpPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:postId" element={<PostPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
