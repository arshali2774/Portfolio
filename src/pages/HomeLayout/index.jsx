import React from 'react';
import Header from '../../components/Header/index';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default HomeLayout;
