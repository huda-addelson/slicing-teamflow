import React from 'react';
import Button from './Button';
import Title from './Title';

export default function Integration() {
  const integrate: string[] = [
    'integrate-1',
    'integrate-2',
    'integrate-3',
    'integrate-4',
    'integrate-5',
  ];
  return (
    <div className='container mx-auto py-20 md:py-24 px-4 md:px-0'>
      <div className='flex flex-col items-center gap-y-10 md:gap-y-20'>
        <div className='max-w-3xl'>
          <Title
            text='with your existing tools
in a few clicks'
            textColor='Integrate'
            reverse={true}
          />
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 md:gap-10'>
          {integrate.map((i, index) => (
            <img src={`/images/${i}.svg`} alt={i} key={index} />
          ))}
        </div>
        <Button title='View All' />
      </div>
    </div>
  );
}
