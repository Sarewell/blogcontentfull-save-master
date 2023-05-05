
import React from 'react'
import Link from 'next/link'
import { GrFormNext } from 'react-icons/gr'
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Card({img, title, extract, date}) {
  
  return (
    <div className=''>
      <div className='relative'>
        <img src={img} alt={title} className=' w-full h-64 rounded-sm' />
        <p className='z-20 text-xl p-4 bg-yellow-400 absolute bottom-0 left-4'>{date}</p>
      </div>
      
      <div className=''>
        <p className='font-bold'>{title}</p>
        <p className='text-gray-500'>{extract}</p>
        <p className='text-gray-500 uppercase flex items-center'><IoIosArrowRoundForward></IoIosArrowRoundForward> read more</p>
      </div>
      
    </div>
  )
}
