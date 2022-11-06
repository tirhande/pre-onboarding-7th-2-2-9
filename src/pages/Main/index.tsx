import React from 'react';
import RangeDatePicker from './DatePicker';
import Trend from './Trend';
import Media from './Media';
import { Header } from './styles';

const MainPage = () => {
  return (
    <>
      <Header>
        <span>대시보드</span>
        <RangeDatePicker />
      </Header>
      <Trend />
      <Media />
    </>
  );
};
export default MainPage;
