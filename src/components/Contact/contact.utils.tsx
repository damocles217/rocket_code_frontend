import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { MessageType } from '../../../types/message';
import { FormType } from '../../../types/form';

export const pressEnterKey = (
  e: KeyboardEvent<HTMLDivElement>,
  form: FormType,
  setCheck: Dispatch<SetStateAction<Array<MessageType>>>,
  check: Array<MessageType>,
) => {
  if (e.key == 'Enter' && form.email && form.phone && check.length == 4) {
    e.preventDefault();
    const message = `Correo Electronico: ${form.email}\n
Celular:${form.phone}`;
    setCheck(prev => [
      ...prev,
      {
        message: message,
        owner: 'user',
      },
      {
        message: 'final',
        owner: 'company',
      },
    ]);
  }
};
