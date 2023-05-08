import React from 'react';
import CardPlan from './CardPlan';
import Title from './Title';

type Planning = {
  img: string;
  title: string;
  desc: string;
};

export default function Planning() {
  const plan: Array<Planning> = [
    {
      img: 'plan-1',
      title: 'Business Planning',
      desc: 'Our Business Plan is a written document describing a company’s core business activities.',
    },
    {
      img: 'plan-2',
      title: 'Financial Planning',
      desc: 'Our expert team sensible decision about their money, to ensure they achieve the life goals. A financial plan.',
    },
    {
      img: 'plan-3',
      title: 'Market Analysis',
      desc: 'A market analysis is a quantitative and qualitative assessment of a market. It looks into the size of the market.',
    },
  ];
  return (
    <div className='container mx-auto py-20 md:py-24 px-4 xl:px-10'>
      <div className='flex flex-col text-center gap-y-10 md:gap-y-24'>
        <Title text='What you' textColor='can do?' />
        <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
          {plan.map((p, index) => (
            <div key={index}>
              <CardPlan
                img={`/images/${p.img}.png`}
                title={p.title}
                desc={p.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
