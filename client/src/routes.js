import React from 'react';

import routesPaths from 'constants/routesPaths';
import GamePage from 'pages/GamePage';
import LoginPage from 'pages/LoginPage';
import SignUpPage from 'pages/SignUpPage';
import NotFoundPage from 'pages/NotFoundPage';

const room = { name: "# Megu's life" };

const routes = [
  {
    path: routesPaths.index,
    component: <GamePage room={room} />,
    exact: true,
    private: true
  },
  {
    path: routesPaths.login,
    component: <LoginPage />
  },
  {
    path: routesPaths.signUp,
    component: <SignUpPage />
  },
  {
    component: <NotFoundPage />
  }
];

export default routes;
