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
    <div className={`${className} max-w-lg p-2`}>
      <h2 className='uppercase'>{blockContent.title}</h2>
      <hr className='border-t-[4px] border-primary my-5 w-14' />
      <p className=''>{blockContent.description}</p>
      <CTA className='my-8' href={blockContent.cta.href} >{blockContent.cta.label}</CTA>
    </div>
  );
}

export default Block;
