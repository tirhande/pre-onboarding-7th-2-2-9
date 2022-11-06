import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, To } from 'react-router-dom';
import Layout from 'components/blocks/layout/Layout';
import MainPage from 'pages/Main';
import AdsManagePage from 'pages/Adsmanage';
import NotFoundPage from 'pages/Notfound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Redirect to="/main" />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/admanage" element={<AdsManagePage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const Redirect = ({ to }: { to: To }) => <Navigate to={to} />;

export default Router;
