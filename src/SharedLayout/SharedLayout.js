import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HeaderContainer, Nav } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <HeaderContainer>
        <Nav>
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              color: isActive ? 'rgb(165, 14, 14)' : 'whitesmoke',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            style={({ isActive }) => ({
              color: isActive ? 'rgb(165, 14, 14)' : 'whitesmoke',
            })}
          >
            Movies
          </NavLink>
        </Nav>
      </HeaderContainer>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
