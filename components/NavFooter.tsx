import Link from 'next/link';
import React from 'react';

interface Links {
  link: string;
  url: string;
}

interface Props {
  top: string;
  links: Array<Links>;
}

export default function NavFooter({ top, links }: Props) {
  return (
    <div className='flex flex-col gap-y-5 w-full'>
      <h3 className='text-[#2B3377] text-lg font-medium'>{top}</h3>
      <div className='flex flex-col gap-y-3 text-base font-light text-[#5C5E87] hover:text-[#2B3377]'>
        {links.map((link, index) => (
          <Link href={`${link.url}`} key={index}>
            {link.link}
          </Link>
        ))}
      </div>
    </div>
  );
}
