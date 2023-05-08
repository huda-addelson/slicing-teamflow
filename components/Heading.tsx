import React from 'react';

interface Props {
  text: string;
}

export default function Heading({ text }: Props) {
  return <div className='text-3xl md:text-[40px] font-bold'>{text}</div>;
}
