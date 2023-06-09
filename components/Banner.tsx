import React from 'react';
import Desc from './Desc';
import Heading from './Heading';
import Line from './Line';

interface Props {
  img: string;
  title: string;
  background: string;
  desc: string;
  reverse?: boolean;
}

export default function Banner({
  img,
  title,
  background,
  desc,
  reverse,
}: Props) {
  return (
    <div className='py-20 md:py-24'>
      <div className='w-full bg-secondary'>
        <div className='container mx-auto px-4 py-4 md:py-0 xl:px-10'>
          <div
            className={`flex flex-col gap-y-4 md:gap-y-0  pt-5 items-center justify-between ${
              reverse ? 'md:flex-row-reverse' : ''
            }`}>
            <div className='w-full md:w-2/4'>
              <img
                src={`/images/${img}.svg`}
                alt=''
                width='100%'
                height='100%'
              />
            </div>
            <div className='w-full md:w-2/4'>
              <Heading text={title} />
              <Line background={background} />
              <Desc text={desc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
