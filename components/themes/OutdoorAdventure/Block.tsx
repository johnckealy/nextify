import React from 'react'
import CTA from '@/components/common/CTA';


interface Props {
  blockContent: {
    title: string,
    description?: string,
    cta?: {
      label: string,
      href: string
    }
  },
  className?: string,
  children?: React.ReactNode,
  useHr?: boolean
}


const Block = ({blockContent, className, children, useHr=true}: Props) => {
  return (
    <div className={`${className} max-w-lg p-2 text-center md:text-left flex flex-col items-center md:items-start`}>
      {children}
      {useHr && <hr className='border-t-[4px] border-primary md:my-1 w-14' />}
      <p className=''>{blockContent.description}</p>
      {blockContent?.cta && <CTA className='my-10' href={blockContent.cta.href} >{blockContent.cta.label}</CTA>}
    </div>
  );
}

export default Block;
