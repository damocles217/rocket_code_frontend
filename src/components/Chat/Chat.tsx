import React, { ComponentType, useState } from 'react';
import Name from '../Name/Name';
import style from './sass/Chat.module.scss';

const Chat: ComponentType = () => {
  const [form, setForm] = useState();
  return (
    <form data-testid="main" className={style.main}>
      <Name />
    </form>
  );
};

export default Chat;
