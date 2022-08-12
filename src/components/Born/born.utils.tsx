import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { MessageType } from '../../../types/message';
import { FormType } from '../../../types/form';

export const pressEnterKey = (
  e: KeyboardEvent<HTMLDivElement>,
  form: FormType,
  setCheck: Dispatch<SetStateAction<Array<MessageType>>>,
  check: Array<MessageType>,
) => {
  if (
    e.key == 'Enter' &&
    form.year &&
    form.day &&
    form.mounth &&
    check.length == 2
  ) {
    const bornString = `${form.day} ${form.mounth} ${form.year}`;

    setCheck(prev => [
      ...prev,
      {
        message: bornString,
        owner: 'user',
      },
      {
        message: 'contact',
        owner: 'company',
      },
    ]);
  }
};
