import React from 'react';
import Button from './Button';
import Desc from './Desc';
import Heading from './Heading';
import Line from './Line';

export default function Support() {
  return (
    <div className='mx-auto container pt-40 pb-20'>
      <div className='flex justify-between w-full'>
        <div className='w-2/4'>
          <img
            src='images/support.svg'
            alt='support'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-2/4 mt-20'>
          <Heading text='24/7 Customer Support' />
          <Line background='bg-main' />
          <Desc text='Our team is here to give you personalized support within the hour available 24/7. In accordance with our commitment to providing superior and professional service. Join daily live webinars, watch our tutorials, or browse through our knowledge base' />
          <div className='mt-5'>
            <Button title='Read More' />
          </div>
        </div>
      </div>
    </div>
  );
}
