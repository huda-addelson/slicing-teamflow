import React from 'react';
import Banner from './Banner';

interface Ibanner {
  img: string;
  title: string;
  background: string;
  desc: string;
  reverse?: boolean;
}

export default function SetupMinute() {
  const banner: Ibanner = {
    img: 'banner-1',
    title: 'Set up in minutes',
    background: 'bg-main',
    desc: 'Get started fast with hundreds of visual and customizable templates - or create your own. Use our free online template maker to create beautiful template in minutes.Choose from hundreds of pre-made templates and tell stories with data with our easy drag-and-drop infographic creator.',
    reverse: true,
  };

  return (
    <Banner
      img={banner.img}
      title={banner.title}
      desc={banner.desc}
      background={banner.background}
      reverse={banner.reverse}
    />
  );
}
