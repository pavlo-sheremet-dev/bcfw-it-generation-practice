import { NavLink, NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/page1">Link_to_Page_1</NavLink>
        </li>
        <li>
          <NavLink to="/page2">Link_to_Page_2</NavLink>
        </li>
      </NavList>
    </nav>
  );
};
