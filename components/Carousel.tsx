import { useEffect, useState, useRef, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Img from "components/Img";
import {
  animate,
  AnimationOptions,
  motion,
  PanInfo,
  useMotionValue,
  MotionValue
} from "framer-motion";


interface PageProps {
  index: number;
  renderPage: (props: { index: number }) => JSX.Element;
  x: MotionValue;
  onDragEnd(event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void;
}

interface VirtualizedPageProps {
  children: (props: { index: number }) => JSX.Element;
  images: string[];
}

// I couldn't get the Types to play nice with TinaCMS, but I'll leave this here...
interface CarouselProps {
  carouselImages: {
    carouselImage: string
  }[]
}


const Page = ({ index, renderPage, x, onDragEnd }: PageProps) => {
  const child = useMemo(() => renderPage({ index }), [index, renderPage]);

  return (
    <motion.div
      className="absolute w-full h-full"
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </motion.div>
  );
};


export const VirtualizedPage = ({ images, children }: VirtualizedPageProps) => {
  const range = [-1, 0, 1];
  const transition: AnimationOptions<any> = {
    type: "spring",
    bounce: 0,
  };
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;
    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition);
      return;
    }

    if (offset.x > clientWidth / 4) {
      setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      setIndex(index + 1);
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
  }, [index, x, calculateNewX, transition]);

  return (
    <>
      <motion.div ref={containerRef} className="relative overflow-hidden w-full h-full">
        {range.map((rangeValue) => {
          return (
            <Page
              key={rangeValue + index}
              x={x}
              onDragEnd={handleEndDrag}
              index={rangeValue + index}
              renderPage={children}
            />
          );
        })}
      </motion.div>
      <div className="flex justify-center gap-3 text-grey" >
        <button onClick={() => setIndex(index - 1)} className="btn btn-ghost"><FaChevronLeft className="w-6 h-6" /></button>
        {images.map((image, i) => {
          return <button key={i} onClick={() => setIndex(i)} className={index == i ? 'text-black' : 'text-gray-300'}>O</button>
        })}
        <button onClick={() => setIndex(index + 1)} className="btn btn-ghost"><FaChevronRight className="w-6 h-6" /></button>
      </div>
    </>
  );
};


export default function Carousel({ carouselImages }: any) {
  const imageList = carouselImages.map((image: any) => image.carouselImage);

  return (
    <div className="w-[full] md:w-[500px] h-[400px] md:h-[400px] mx-auto pb-24">
      <VirtualizedPage images={imageList}>
        {({ index }) => {
          const modulo = index % imageList.length;
          const imageIndex = modulo < 0 ? imageList.length + modulo : modulo;
          console.log(imageIndex)
          return (
            <Img src={imageList[imageIndex]}
              className="w-full"
              draggable={false}
              alt="Carousel image"
            />
          );
        }}
      </VirtualizedPage>
    </div>
  );
}
