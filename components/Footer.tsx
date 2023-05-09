import { product, resource, solutions, team } from '../utils/data';
import React from 'react';
import NavFooter from './NavFooter';
import { SiFacebook, SiInstagram, SiTwitter, SiYoutube } from 'react-icons/si';
import Link from 'next/link';
export default function Footer() {
  const icons = [
    {
      id: 1,
      icon: <SiFacebook />,
      url: '#',
    },
    {
      id: 2,
      icon: <SiInstagram />,
      url: '#',
    },
    {
      id: 3,
      icon: <SiTwitter />,
      url: '#',
    },
    {
      id: 4,
      icon: <SiYoutube />,
      url: '#',
    },
  ];
  return (
    <div className='container mx-auto pt-24 pb-10 px-10 md:px-4'>
      {/* wrapper paling luar */}
      <div className='grid grid-cols-12 gap-y-10'>
        {/* wrapper grid kiri */}
        <div className='col-span-12 lg:col-span-3'>
          <div className='flex flex-col gap-y-5'>
            <img
              src='images/logo-footer.svg'
              alt='logo footer'
              className='w-1/2 h-full'
            />
            <span className='text-[#5C5E87] text-base font-light'>
              All Rights Reserved © teamflow.com
            </span>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-[#2B3377] text-lg font-medium'>Address</h3>
              <p className='text-[#5C5E87] text-base font-light'>
                26 W 12th St. New York, NY 10342, NYC
              </p>
            </div>
            <div className='flex flex-col gap-y-2'>
              <h3 className='text-[#2B3377] text-lg font-medium'>
                Social media
              </h3>
              <div className='flex gap-x-2'>
                {icons.map((icon) => (
                  <Link
                    href={icon.url}
                    key={icon.id}
                    className='p-2 rounded-full bg-black text-white'>
                    {icon.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* wrapper grid kanan */}
        <div className='col-span-12 lg:col-span-9'>
          <div className='grid grid-cols-4 gap-10 lg:gap-0'>
            <div className='col-span-2 lg:col-span-1'>
              <NavFooter links={product} top='Product' />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <NavFooter links={team} top='Team' />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <NavFooter links={solutions} top='Solutions' />
            </div>
            <div className='col-span-2 lg:col-span-1'>
              <NavFooter links={resource} top='Resources' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
