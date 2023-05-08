import React from 'react';
import Button from './Button';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Link from 'next/link';

export default function Navbar() {
  const menus = [
    {
      title: 'Product',
      icon: true,
    },
    {
      title: 'Solution',
      icon: true,
    },
    {
      title: 'Enterprise',
      icon: false,
    },
    {
      title: 'Pricing',
      icon: false,
    },
  ];
  return (
    <div className='absolute top-0 left-0 right-0 container mx-auto'>
      <div className='flex justify-between items-center w-full h-[80px]'>
        <div className='flex gap-1'>
          <img src='/images/logo.png' alt='logo' width='25' height='25' />
          <h3 className='text-white text-3xl font-semibold'>TeamFlow</h3>
        </div>
        <ul className='flex space-x-4 text-lg text-white font-light'>
          {menus.map((menu, index) => (
            <li key={index}>
              <Link href={'/#'} className='flex items-center gap-1'>
                {menu.title}
                {menu.icon && (
                  <MdOutlineKeyboardArrowDown width={5} height={5} />
                )}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex gap-2'>
          <Button title='Login' outline={true} />
          <Button title='Sign Up' />
        </div>
      </div>
    </div>
  );
}
