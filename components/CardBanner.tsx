import React from 'react';
import Desc from './Desc';
import Heading from './Heading';
import Line from './Line';
import Title from './Title';

interface Props {
  text?: string;
  textColor?: string;
  img: string;
  headingText: string;
  bakcground: string;
  desc: string;
}

export default function CardBanner({
  text,
  textColor,
  img,
  headingText,
  bakcground,
  desc,
}: Props) {
  return (
    <div className='container mx-auto py-20 md:py-40 px-4 md:px-0'>
      <div className='flex flex-col gap-y-24 '>
        <Title text={text || ''} textColor={textColor || ''} />
        <div className='grid grid-cols-11 items-center gap-3 md:gap-0'>
          <div className='col-span-11 md:col-span-6'>
            <img src={`/images/${img}.svg`} alt={img} />
          </div>
          <div className='col-span-11 md:col-span-5'>
            <div className='w-full md:w-3/4'>
              <Heading text={headingText} />
            </div>
            <Line background={bakcground} />
            <Desc text={desc} />
          </div>
        </div>
      </div>
    </div>
  );
}
