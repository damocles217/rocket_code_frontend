import React, { ComponentType } from 'react';
import { ReceivedForm } from '../../../types/form';
import style from './sass/UserMessages.module.scss';

const MessageWithData: ComponentType<{ message: ReceivedForm }> = ({
  message,
}: {
  message: ReceivedForm;
}) => {
  return (
    <section className={style.messageProps}>
      <span>
        `${message.name} ${message.secondName} ${message.lastname} $
        {message.secondLastname}`
      </span>
      <span>{message.bornDate}</span>
      <span>{message.email}</span>
      <span>{message.phone}</span>
    </section>
  );
};
export default MessageWithData;
