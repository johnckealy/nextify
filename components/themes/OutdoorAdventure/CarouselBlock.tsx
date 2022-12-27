import Block from '@/components/themes/OutdoorAdventure/Block';
import Carousel from '@/components/common/Carousel';


interface Props {
  carouselBlockContent: {
    title: string;
    description: string;
  }
}

const CarouselBlock = ({ carouselBlockContent }: Props) => {
  return (
    <>
      <span className='border-b-[4px] border-primary md:ml-16 pb-2'>{carouselBlockContent.category}</span>
      <Block
        useHr={false}
        className='max-w-3xl flex flex-col md:mx-20 mt-10 mb-10 md:mb-20'
        blockContent={carouselBlockContent}>
        <h2 className='my-0'>{carouselBlockContent.title}</h2>
      </Block>

      <Carousel />

    </>
  );
}

export default CarouselBlock;
