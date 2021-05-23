import React from 'react';
import { Routes } from './routes/Routes';
import { AppHeader } from './app/AppHeader';

export const AppContainer = () => {
  return (
    <div
      style={{
        backgroundColor: '#161B22',
        height: '100vh',
      }}
    >
      <AppHeader />
      <Routes />
    </div>
  );
};
