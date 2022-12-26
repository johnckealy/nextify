import React from 'react'
import Img from '@/components/Img';
import CTA from '@/components/common/CTA';


const Card = ({cardContent}) => {
  return (
    <div className='text-center'>
      <Img src={cardContent.imageSrc} alt="Card image" className="my-8 rounded-md mx-auto" />
      <h5 className=''>{cardContent.title}</h5>
      <p className='text-grey'>{cardContent.body}</p>
      <CTA className='mx-auto m-4' href={cardContent.cta.href} >{cardContent.cta.label}</CTA>
    </div>
  );
}

export default Card;
