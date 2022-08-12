import React, { ComponentType, useState } from 'react';
import { FormType } from '../../../types/form';
import { MessageType } from '../../../types/message';
import Name from '../Name/Name';
import style from './sass/Chat.module.scss';

const Chat: ComponentType = () => {
  const [check, setCheck] = useState<Array<MessageType>>([]);
  const [form, setForm] = useState<FormType>({
    bornDate: '',
    email: '',
    lastname: '',
    name: '',
    phone: '',
    secondLastname: '',
    secondName: '',
  });

  return (
    <form data-testid="main" className={style.main}>
      <Name form={form} setForm={setForm} setCheck={setCheck} check={check} />
    </form>
  );
};

export default Chat;
