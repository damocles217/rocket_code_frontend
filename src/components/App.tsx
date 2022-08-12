import React, { ComponentType, lazy, Suspense } from 'react';
const Header = lazy(() => import('./Header/Header'));
import style from './App.module.scss';
const Chat = lazy(() => import('./Chat/Chat'));

const App: ComponentType = () => {
  return (
    <div className={style.container}>
      <Header />
      <Suspense fallback={<div />}>
        <Chat />
      </Suspense>
    </div>
  );
};

export default App;
