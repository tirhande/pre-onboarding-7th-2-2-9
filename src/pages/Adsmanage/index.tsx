import React, { useEffect } from 'react';
import { useAppDispatch } from 'redux/hooks';
import { getAdDatas } from 'redux/reducer/adsSlice';
import AdsManage from './AdsManage';
import { Header } from './styles';

const AdsManagePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAdDatas());
  }, [dispatch]);

  return (
    <>
      <Header>
        <h1>광고관리</h1>
      </Header>
      <AdsManage />
    </>
  );
};

export default AdsManagePage;
