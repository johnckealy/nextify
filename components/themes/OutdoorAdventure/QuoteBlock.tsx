import { ImQuotesLeft } from 'react-icons/im';
import React from 'react'

interface QuoteBlockProps {
  children: React.ReactNode,
  author: string
}


const QuoteBlock = ({ children, author }: QuoteBlockProps) => {
  return (
    <div className="p-10 md:p-20 flex flex-col md:flex-row items-center justify-center">
      <ImQuotesLeft className='w-20 h-20 opacity-30 translate-x-10 translate-y-16 md:-translate-y-10' />
      <div>
        <p className='text-xl md:text-2xl'>{children}</p>
        <p className='text-center'>- {author}</p>
      </div>
    </div>
  );
}

export default QuoteBlock;
