import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { MessageType } from '../../../types/message';
import { FormType } from '../../../types/form';

export const pressEnterKey = (
  e: KeyboardEvent<HTMLDivElement>,
  form: FormType,
  setCheck: Dispatch<SetStateAction<Array<MessageType>>>,
  check: Array<MessageType>,
) => {
  if (e.key == 'Enter' && form.name && form.lastname && check.length == 0) {
    const message = `${form.name} ${form.secondName} ${form.lastname} ${form.secondLastname}`;
    setCheck(prev => [
      ...prev,
      {
        message: message,
        owner: 'user',
      },
      {
        message: 'born',
        owner: 'company',
      },
    ]);
  }
};
