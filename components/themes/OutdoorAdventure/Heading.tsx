import React from 'react'


interface HeadingProps {
  children: React.ReactNode
}

const Heading = ({ children }: HeadingProps) => {
  return (
    <>
      <h2 className='text-center'>{children}</h2>
      <hr className='border-primary border mx-auto my-10 w-12' />
    </>
  );
}

export default Heading;
