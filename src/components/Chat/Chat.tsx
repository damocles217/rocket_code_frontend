import React, { ComponentType } from 'react';
import style from './sass/Chat.module.scss';

const Chat: ComponentType = () => {
  return (
    <main data-testid="main" className={style.main}>
      <div>Hi</div>
    </main>
  );
};

export default Chat;
