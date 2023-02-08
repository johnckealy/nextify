import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  containerClassName?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}


const Img = ({ src, alt, className, containerClassName, priority, children, fullWidth }: Props) => {
  const [isReady, setisReady] = useState(true);

  return (
    <div className={`relative h-full ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, ${fullWidth ? '100vw' : '40vw'} `}
        className={`${className} object-contain transition duration-500 ${isReady ? 'blur-0' : 'blur-xl bg-gray-400'}`}
        onLoadingComplete={() => setisReady(true)}
        fill
        priority={priority}
      />
      {children}
    </div>

  );
}

export default Img;
