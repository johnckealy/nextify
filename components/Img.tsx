import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  containerClassName?: string;
  children?: React.ReactNode;
}


const Img = ({ src, alt, className, containerClassName, priority, children }: Props) => {
  const [isReady, setisReady] = useState(false);

  return (
    <div className={`relative ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`${className} object-cover transition duration-1000 ${isReady ? 'scale-100 blur-0' : 'scale-120 blur-xl bg-gray-400'}`}
        onLoadingComplete={() => setisReady(true)}
        fill
        priority={priority}
      />
      {children}
    </div>

  );
}

export default Img;
