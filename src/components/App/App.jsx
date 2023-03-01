// import { useEffect } from 'react';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import HomePage from 'pages/ContactsPage/HomePage';
import SignUpPage from 'pages/ContactsPage/SignUpPage';
import { Navigate, NavLink, Outlet, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>
                <div style={{ display: 'flex', gap: 10 }}>
                  <nav>
                    <ul style={{ display: 'flex', gap: 10 }}>
                      <li>
                        <NavLink to={'/'}>HOME</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/login'}>LOGIN</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/register'}>SIGN UP</NavLink>
                      </li>
                      <li>
                        <NavLink to={'/contacts'}>CONTACTS</NavLink>
                      </li>
                    </ul>
                  </nav>
                  <div>
                    USER MENU <button type="button">LOG OUT</button>
                  </div>
                </div>
              </header>
              <main>
                <Outlet />
              </main>
            </>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="login" element={<div>SIGN UP PAGE</div>} />
          <Route path="register" element={<SignUpPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </>
  );
}
