import Block from '@/components/themes/OutdoorAdventure/Block';
import Carousel from '@/components/common/Carousel';


interface Props {
  carouselBlockContent: {
    title: string;
    description: string;
    category: string;
  }
}

const CarouselBlock = ({ carouselBlockContent }: Props) => {
  return (
    <>
      <span className='border-b-[4px] border-primary pb-2'>{carouselBlockContent.category}</span>
      <Block
        useHr={false}
        className='max-w-3xl '
        blockContent={carouselBlockContent}>
        <h2 className='my-0'>{carouselBlockContent.title}</h2>
      </Block>

      <div className='max-w-[800px] mx-auto'>
        <Carousel />
      </div>
    </>
  );
}

export default CarouselBlock;
