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
    <div className='container mx-auto py-24'>
      <div className='flex flex-col items-center gap-y-20'>
        <div className='max-w-3xl'>
          <Title
            text='with your existing tools
in a few clicks'
            textColor='Integrate'
            reverse={true}
          />
        </div>
        <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          {integrate.map((i, index) => (
            <img src={`/images/${i}.svg`} alt={i} key={index} />
          ))}
        </div>
        <Button title='View All' />
      </div>
    </div>
  );
}
