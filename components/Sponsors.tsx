import React from 'react';
import Line from './Line';

export default function Sponsors() {
  const sponsors: string[] = [
    'sponsor-1',
    'sponsor-2',
    'sponsor-3',
    'sponsor-4',
  ];
  return (
    <div className='container mx-auto py-10 md:py-24 px-4 md:px-0'>
      <Line background='bg-main' />
      <div className='flex justify-between items-center flex-col md:flex-row gap-y-3 md:gap-y-0'>
        <div className='w-full md:max-w-xl'>
          <h3 className='text-xl md:text-3xl font-bold'>
            See why over 100,000 teams choose TeamFlow.com
          </h3>
        </div>
        <div className='flex gap-x-5 md:gap-x-20 overflow-scroll'>
          {sponsors.map((sponsor, index) => (
            <img
              src={`/images/${sponsor}.png`}
              alt={sponsor}
              width='sm:100% md:110'
              height='sm:100% md:110'
              key={index}
              className='overflow-x-scroll md:overflow-hidden'
            />
          ))}
        </div>
      </div>
    </div>
  );
}
