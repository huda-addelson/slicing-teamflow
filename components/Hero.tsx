import React from 'react';
import Button from './Button';
import Line from './Line';

export default function Hero() {
  return (
    <div className='container mx-auto flex w-full h-full items-center flex-col md:flex-row px-4 xl:px-10 gap-y-10 pt-28 md:pt-0'>
      {/* Desc Hero */}
      <div className='flex flex-col  gap-y-2 w-full md:w-3/5 '>
        <span className='text-base md:text-xl p-2 bg-secondary rounded-md pr-6 font-thin w-fit'>
          👋 Welcome to TeamFlow
        </span>
        <h2 className='text-lg md:text-[64px] font-extrabold w-full md:max-w-2xl text-white leading-tight'>
          Work the way that works for you
        </h2>
        <Line background='bg-[#3ADAD9]' />
        <p className='text-3xl font-light text-white max-w-xl mb-5'>
          Create, Build, Collaborate and ship products very faster{' '}
        </p>
        <Button title='Get Started' />
      </div>
      {/* Image Hero */}
      <div className='md:w-9/12 mt-0 md:mt-40 w-full'>
        <img src='/images/hero.svg' alt='hero' width='100%' height='100%' />
      </div>
    </div>
  );
}
