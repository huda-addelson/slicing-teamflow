import React from 'react';
import Banner from './Banner';

interface Ibanner {
  img: string;
  title: string;
  background: string;
  desc: string;
  reverse?: boolean;
}

export default function Visualize() {
  const banner: Ibanner = {
    img: 'banner-2',
    title: 'Visualize work with Views',
    background: 'bg-primary',
    desc: 'View data as a map, calendar, timeline, kanban, and more The easy-to-use, visual interface lets any team member jump in and get started, no training required.',
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
