import { useDispatch } from 'react-redux';
import { toggleMobileMenu } from 'redux/global/slice';
import { getRoutes } from 'routes/routes';
import { NavLink, NavList } from './Navigation.styled';

export const Navigation = () => {
  const dispatch = useDispatch();
  const routes = getRoutes({ isPrivateRoute: false });
  return (
    <nav>
      <NavList>
        {routes.map(({ title, path, relativePath }) => (
          <NavLink
            to={path}
            key={path}
            end={!relativePath}
            onClick={() => dispatch(toggleMobileMenu())}
          >
            {title}
          </NavLink>
        ))}
      </NavList>
    </nav>
  );
};
