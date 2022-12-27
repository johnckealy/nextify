import React from 'react'
import CTA from '@/components/common/CTA';


interface Props {
  blockContent: {
    title: string,
    description: string,
    cta: {
      label: string,
      href: string
    }
  },
  className?: string
}


const Block = ({blockContent, className}: Props) => {
  return (
    <div className={`${className} max-w-lg p-2 text-center md:text-left`}>
      <h2 className='leading-normal'>{blockContent.title}</h2>
      <hr className='border-t-[4px] border-primary my-5 w-14 mx-auto md:mx-0' />
      <p className=''>{blockContent.description}</p>
      <CTA className='my-10 mx-auto md:mx-0' href={blockContent.cta.href} >{blockContent.cta.label}</CTA>
    </div>
  );
}

export default Block;
