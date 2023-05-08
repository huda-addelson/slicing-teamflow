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
    <div className='container mx-auto py-24'>
      <Line background='bg-main' />
      <div className='flex justify-between items-center'>
        <div className='max-w-xl'>
          <h3 className='text-3xl font-bold'>
            See why over 100,000 teams choose TeamFlow.com
          </h3>
        </div>
        <div className='flex gap-x-20'>
          {sponsors.map((sponsor, index) => (
            <img
              src={`/images/${sponsor}.png`}
              alt={sponsor}
              width='110'
              height='110'
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
