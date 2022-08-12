import React, { ComponentType } from 'react';
import style from './sass/UserMessages.module.scss';

const UserMessages: ComponentType<{ message: string }> = ({
  message,
}: {
  message: string;
}) => {
  return <section className={style.message}>{message}</section>;
};

export default UserMessages;
