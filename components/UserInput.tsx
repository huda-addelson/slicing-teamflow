import React from 'react';

type IconType = () => JSX.Element;

interface Props {
  type?: string;
  placeholder: string;
  leftIcon: IconType;
  rightIcon: IconType;
  textButton: string;
}

export default function UserInput({
  type = 'text',
  leftIcon,
  rightIcon,
  textButton,
  placeholder,
}: Props) {
  return (
    <form className='relative flex'>
      {/* Passing React Icons to props */}
      <div className='absolute top-4 left-3 lg:top-5 lg:left-7'>
        {React.createElement(leftIcon)}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full bg-white p-4 lg:p-5 rounded-2xl pl-10 lg:pl-16'
        style={{
          boxShadow: '0px 10px 20px rgba(54, 58, 120, 0.1)',
        }}
      />
      {/* Right element */}
      <button className='flex absolute right-3 top-2 items-center justify-center gap-x-2 px-3 py-2 lg:px-5 lg:py-3 bg-[#686DF1] text-white rounded-2xl text-base font-light'>
        {React.createElement(rightIcon)}
        {textButton}
      </button>
    </form>
  );
}
