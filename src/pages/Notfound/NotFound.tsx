import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import { Button } from '../main/components/component';

const NotFound = () => {
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate('/');
  // };

  return (
    <div>
      <h2>
        Page not found!
        {/* 페이지를 찾을 수 없습니다. */}
      </h2>
      <h3>Sorry! The page you're looking for is not here.</h3>
      {/* <Button type="button" text="메인 화면으로 >" width="200px" height="44px" fontSize="1.3em" background="#000" onClick={navigateHome} /> */}
    </div>
  );
};
export default NotFound;
