import React from 'react';

interface Props {
  text: string;
}

export default function Desc({ text }: Props) {
  return (
    <p className='text-lg font-light text-[#575757] w-full md:w-5/6'>{text}</p>
  );
}
