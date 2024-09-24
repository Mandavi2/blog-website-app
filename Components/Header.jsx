import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='px-5 py-5 md:px-12 lg:px-28' >
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]'>Get started <Image src={assets.arrow} alt=''/></button>
      </div>
      <div className='text-center my-8'>
         <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
         <p className='mt-10 max-w-[610px] m-auto text-xs sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora porro harum obcaecati perferendis voluptatem ut.</p>
      </div>
    </div>
  )
}

export default Header
