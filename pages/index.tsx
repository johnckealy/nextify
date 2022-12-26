import HomePage from '@/components/themes/OutdoorAdventure/Home'
import Img from '@/components/Img'
import CTA from '@/components/common/CTA'



export default function Home() {
  return (
    <>
      <HomePage />

      <Img src={`https://source.unsplash.com/Bkci_8qcdvQ`} alt="image" className="">
        <div className='absolute inset-0 bg-black opacity-30' />
        <div className='relative p-32'>
          <div className='flex flex-col justify-center items-center'>
            <div>
              <h1 className='text-7xl font-montserrat font-bold text-white'>Hello am I inter?</h1>
              <h2 className='text-white'>Some kind of subtitle</h2>
              <CTA href='/'>Get started</CTA>
            </div>
          </div>
        </div>
      </Img>




    </>
  )
}
