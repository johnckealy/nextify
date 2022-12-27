import React from 'react'


interface HeadingProps {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <>
      <div className='my-12'>
        <h2 className='text-center'>{children}</h2>
        <hr className='border-t-4 border-primary w-24 mx-auto' />
      </div>
    </>
  );
}

export default Heading;
