import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import HomePage from 'pages/HomePage';
import Page1 from 'pages/Page1';
import Page2 from 'pages/Page2';
import TeamPage from 'pages/TeamPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };
