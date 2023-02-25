import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import HomePage from 'pages/HomePage';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';
import TeamPage from 'pages/TeamPage';
import PostsPage from 'pages/PostsPage';
import PostPage from 'pages/PostPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="posts/:postId" element={<PostPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
