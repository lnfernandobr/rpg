import React from 'react';
import { Routes } from './routes/Routes';
import { AppHeader } from './app/AppHeader';

export const AppContainer = () => {
  return (
    <>
      <AppHeader />
      <Routes />
    </>
  );
};
