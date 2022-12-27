

interface Props {
  imgSrc: string;
  children?: React.ReactNode;
  className?: string;
}


const BackgroundParallax = ({ imgSrc, children, className }: Props) => {
  return (
    <>
      <div className="relative overflow-hidden">
        <div style={{ backgroundImage: `url("${imgSrc}")` }} className={`${className} w-full bg-fixed bg-cover bg-center`}>
          <div className="bg-black opacity-50 h-full w-full" />
          <div className="absolute inset-0  flex justify-center items-center">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundParallax;
