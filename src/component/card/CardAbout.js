import React from 'react'

export default function CardAbout({image}) {
  return (
    <div className='shadow-sm p-10'>
        <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit repellendus aliquam aut reiciendis eligendi </p>
        <div className='flex gap-2 mt-3'>
            <img src={image} alt="employer" className='h-16 w-16 rounded-full ' />
            <div>
                <p className='font-bold text-2xl'>Roger Scott</p>
                <p className='text-yellow-400 text-xl'>Marketing Manager</p>
            </div>
            
        </div>
    </div>
  )
}
