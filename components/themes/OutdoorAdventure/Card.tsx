import React from 'react'
import Img from '@/components/Img';
import CTA from '@/components/common/CTA';
import Image from 'next/image';

interface cardContentProps {
  cardContent: {
    imageSrc: string,
    title: string,
    body: string,
    cta: {
      label: string,
      href: string
    }
  }
}


const Card = ({ cardContent }: cardContentProps) => {
  return (
    <div className='text-center'>
      <Img src={cardContent.imageSrc} alt="Card image" className="rounded-lg" containerClassName="h-44 md:h-96" />
      <h3 className='text-black'>{cardContent.title}</h3>
      <p className='text-grey'>{cardContent.body}</p>
      <CTA className='mx-auto m-4' href={cardContent.cta.href} >{cardContent.cta.label}</CTA>
    </div>
  );
}

export default Card;
