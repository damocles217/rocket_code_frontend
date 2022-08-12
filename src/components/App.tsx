import React, { ComponentType, lazy } from 'react';
const Header = lazy(() => import('./Header/Header'));
import style from './App.module.scss';
import Chat from './Chat/Chat';

const App: ComponentType = () => {
  return (
    <div className={style.container}>
      <Header />
      <Chat />
    </div>
  );
};

export default App;
