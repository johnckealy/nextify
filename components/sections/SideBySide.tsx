
import Img from '@/components/Img'



const ColoredText = ({ inputColor, children }: any) => {
  return (
    <span className={`text-${inputColor}`}>{children}</span>
  )
}


const SideBySide = ({ header, body }: any) => {
  return (
    <section className="container my-20">
      <h2 className="flex md:hidden relative font-primary text-4xl my-3 pb-5 sunderlined">{header}</h2>
      <div className='md:sgrid '>
        <div className="h-64 relative md:h-96 w-full md:m-6 order-1 place-self-end after:absolute inset-0 after:bg-red-400 after:translate-x-12">
          <Img className='rounded' alt="" src="https://unsplash.com/photos/0YHIlxeCuhg/download?force=true&w=640" />
        </div>
        <div className=''>
          <h2 className="hidden relative md:flex font-primary text-5xl my-3 pb-5 sunderlined">{header}</h2>
          <p className='my-6 md:text-lg'>{body}</p>
        </div>
      </div>
    </section>
  )
}

export default SideBySide;
