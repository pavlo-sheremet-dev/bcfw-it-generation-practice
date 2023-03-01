export const routes = {
  home: {
    title: 'Home',
    path: '/',
    relativePath: '',
    isPrivateRoute: false,
    shouldDisplay: true,
  },
  team: {
    title: 'Out team',
    path: '/team',
    relativePath: 'team',
    isPrivateRoute: false,
    shouldDisplay: true,
  },
  posts: {
    title: 'Articles',
    path: '/posts',
    relativePath: 'posts',
    isPrivateRoute: false,
    shouldDisplay: true,
  },
  post: {
    title: 'Article',
    path: '/posts/:postId',
    relativePath: 'post',
    isPrivateRoute: false,
    shouldDisplay: false,
  },
  // private: {
  //   title: 'Private page',
  //   path: '/private-page',
  //   relativePath: 'private-page',
  //   isPrivateRoute: true,
  //   shouldDisplay: true,
  // },
  // signIn: {
  //   title: 'Sign In',
  //   path: '/signin',
  //   relativePath: 'signin',
  //   isPrivateRoute: false,
  //   shouldDisplay: true,
  // },
  // signUp: {
  //   title: 'Sign Up',
  //   path: '/signup',
  //   relativePath: 'signup',
  //   isPrivateRoute: false,
  //   shouldDisplay: true,
  // },
};

export const getRoutes = ({ isPrivateRoute = false }) =>
  Object.values(routes).filter(
    route => route.isPrivateRoute === isPrivateRoute && route.shouldDisplay,
  );
