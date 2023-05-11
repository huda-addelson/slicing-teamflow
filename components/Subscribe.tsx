import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import UserInput from './UserInput';

export default function Subscribe() {
  return (
    <div className='w-full bg-secondary py-16 md:py-20'>
      <div className='max-w-3xl mx-auto text-center'>
        <div className='flex flex-col gap-y-1'>
          <h3 className='text-[#EB801D] text-lg md:text-2xl font-bold'>
            Support
          </h3>
          <h2 className='text-xl md:text-3xl font-bold'>
            Subscribe Newsletter & get
          </h2>
          <p className='text-lg md:text-2xl font-light'>Company News</p>
        </div>
      </div>
      <div className='max-w-xl w-full mx-auto mt-5 px-3'>
        <UserInput
          leftIcon={() => <MdEmail className='w-6 h-6 text-[#9092B0]' />}
          textButton='subscribe'
          rightIcon={() => <FaPaperPlane className='w-4 h-4' />}
          placeholder='Your Email'
        />
      </div>
    </div>
  );
}
