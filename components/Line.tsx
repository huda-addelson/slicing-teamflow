import React from 'react';
interface Props {
  background: string;
}

export default function Line({ background }: Props) {
  return <div className={`w-[65px] ${background} h-1 rounded-lg my-5`}></div>;
}
