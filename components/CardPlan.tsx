import React from 'react';

interface Props {
  img: string;
  title: string;
  desc: string;
}

export default function CardPlan({ img, title, desc }: Props) {
  return (
    <div className='flex flex-col items-center text-center gap-y-10'>
      <img src={img} alt='' />
      <h3 className='text-2xl font-bold text-[#2B3377]'>{title}</h3>
      <p className='text-xl font-light lg:px-10'>{desc}</p>
    </div>
  );
}
