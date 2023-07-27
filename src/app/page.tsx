'use client'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './layout/Header';
import { AppRouter } from './router/AppRouter';


const Page: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </>
  );
};

export default Page;

