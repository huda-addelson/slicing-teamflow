import React from 'react';

interface Props {
  textColor: string;
  text: string;
  reverse?: boolean;
  classname?: string;
}

export default function Title({ text, textColor, reverse = false }: Props) {
  return (
    <h2
      className={`flex gap-x-3 text-5xl font-medium justify-center ${
        reverse ? 'flex-row-reverse' : ''
      }`}>
      {text} <span className='text-main'> {textColor}</span>
    </h2>
  );
}
