import React from 'react';

interface Props {
  outline?: boolean;
  title: string;
}

export default function Button({ outline, title }: Props) {
  return (
    <button
      className={`${
        outline ? 'bg-none' : 'bg-main'
      } w-fit px-5 py-2 rounded-md`}>
      {title}
    </button>
  );
}
