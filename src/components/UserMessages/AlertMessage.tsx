import React, { ComponentType } from 'react';
import style from '../sass/Messages.module.scss';

const AlertMessage: ComponentType = () => {
  return (
    <section className={style.final}>
      <h3>Si tus datos son correctos por favor envialos</h3>
    </section>
  );
};

export default AlertMessage;
