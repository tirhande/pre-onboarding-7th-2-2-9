import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';
import styled from 'styled-components';

const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Header />
        <Wrap>
          <Outlet />
        </Wrap>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  min-height: 100%;
`;

const Wrapper = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

const Wrap = styled.div`
  flex: 1;
  height: 100%;
`;

export default Layout;
