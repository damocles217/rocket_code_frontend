import React, { ComponentType, useState, useEffect, Fragment } from 'react';
import { FormType, ReceivedForm } from '../../../types/form';
import { MessageType } from '../../../types/message';
import Born from '../Born/Born';
import Contact from '../Contact/Contact';
import Name from '../Name/Name';
import AlertMessage from '../UserMessages/AlertMessage';
import MessageWithData from '../UserMessages/MessageWithData';
import UserMessages from '../UserMessages/UserMessages';
import { handleSubmit } from './chat.utils';
import style from './sass/Chat.module.scss';

const Chat: ComponentType = () => {
  const [check, setCheck] = useState<Array<MessageType>>([]);
  const [receivedData, setData] = useState<ReceivedForm>({
    email: '',
    lastname: '',
    name: '',
    phone: '',
    secondLastname: '',
    secondName: '',
    id: null,
    bornDate: '',
  });
  const [form, setForm] = useState<FormType>({
    day: '',
    mounth: '',
    year: '',
    email: '',
    lastname: '',
    name: '',
    phone: '',
    secondLastname: '',
    secondName: '',
  });

  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight });
  }, [check, receivedData]);

  return (
    <form
      data-testid="main"
      className={style.main}
      onSubmit={e => handleSubmit(e, form, setData)}
    >
      <Name form={form} setForm={setForm} setCheck={setCheck} check={check} />

      {check.map((value, index) => {
        if (value.owner == 'company' && value.message == 'born')
          return (
            <Born
              form={form}
              setForm={setForm}
              setCheck={setCheck}
              check={check}
              key={index}
            />
          );

        if (value.message == 'contact')
          return (
            <Contact
              form={form}
              setForm={setForm}
              setCheck={setCheck}
              check={check}
              key={index}
            />
          );
        if (value.owner == 'user')
          return <UserMessages message={value.message} key={index} />;

        if (value.owner == 'company' && value.message == 'final') {
          return <AlertMessage key={index} />;
        }
      })}

      {check.length > 0 && check[check.length - 1].message == 'final' && (
        <button type="submit" className={style.send}>
          Iniciar
        </button>
      )}
      {receivedData.name && <MessageWithData message={receivedData} />}
    </form>
  );
};

export default Chat;
