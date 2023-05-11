import React, { useState } from 'react';

import Link from 'next/link';
import Button from './Button';
import { motion } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineKeyboardArrowDown, MdClose } from 'react-icons/md';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  const hiddenStyle = 'hidden';

  const visibleStyle =
    'fixed space-y-10 bg-white w-full p-6 left-[30%] right-0 top-0 min-h-screen text-black pt-20 z-10';

  const bgStyle =
    'fixed  bg-opacity-70 space-y-10 bg-zinc-800 w-full p-6 left-0 right-0 top-0 min-h-screen text-black pt-20 z-0';

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

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 500, damping: 24 },
    },
    closed: { opacity: 0, y: -120, transition: { duration: 0.2 } },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsClosed(!isClosed);
    setIsHidden(!isHidden);
  };

  return (
    <div className='absolute top-0 container mx-auto px-4 xl:px-10'>
      <div className='flex justify-between items-center w-full h-[80px]'>
        <div className='flex gap-1'>
          <img src='/images/logo.png' alt='logo' width='25' height='25' />
          <h3 className='text-white text-3xl font-semibold'>TeamFlow</h3>
        </div>
        <ul className='hidden md:flex space-x-4 text-lg text-white font-light '>
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
        {/* Responsive Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className='flex'>
          <motion.button
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
            onClick={toggleMenu}
            className={`z-50 ${
              isHidden ? 'absolut md:hidden' : 'fixed'
            } top-3 right-3 grid w-[50px] h-[50px] place-items-center`}>
            {isOpen ? (
              <MdClose color='black' width={5} height={5} />
            ) : (
              <GiHamburgerMenu color='white' width={5} height={5} />
            )}
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 0px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 0px)',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                },
              },
            }}
            className={isHidden ? hiddenStyle : visibleStyle}>
            {menus.map((menu, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className={isOpen ? 'flex' : 'hidden'}>
                <Link href={'/#'} className='flex items-center gap-2'>
                  {menu.title}
                  {menu.icon && (
                    <MdOutlineKeyboardArrowDown width={5} height={5} />
                  )}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className={isHidden ? hiddenStyle : bgStyle}
          onClick={toggleMenu}></motion.div>

        <div className='gap-2 hidden lg:flex'>
          <Button title='Login' outline={true} />
          <Button title='Sign Up' />
        </div>
      </div>
    </div>
  );
}
