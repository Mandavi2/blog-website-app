import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='px-5 py-5 md:px-12 lg:px-28' >
      <div className='flex justify-between items-center'>
        <Image src={assets.logo} width={180} alt='' className='w-[130] sm:w-auto'/>
      </div>
    </div>
  )
}

export default Header
