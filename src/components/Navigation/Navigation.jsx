import { NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavList>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Contacts</a>
        </li>
      </NavList>
    </nav>
  );
};
