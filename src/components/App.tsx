import React, { ComponentType, lazy } from 'react';
const Header = lazy(() => import('./Header/Header'));
import style from './App.module.scss';

const App: ComponentType = () => {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
};

export default App;
