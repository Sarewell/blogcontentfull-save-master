import Link from 'next/link'
import React from 'react'



export default function NavBar() {
  return (
    <div className='heroe'>
      <div className='flex justify-between  px-[10%] bg-transparent items-center '>
      <h1 className='font-black text-white text-4xl'>Read<span className='text-yellow-400'>it</span>.</h1>
        <ul className='hidden md:flex justify-end gap-5 text-white text-xl capitalize font-bold'>
            <Link href='/'>
              <li>home</li>
            </Link>
            <Link href='/about'>
              <li>about</li>
            </Link>
            <Link href='/contact'>
              <li>contact</li>
            </Link>
            <Link href='/post/23'>
              <li>post</li>
            </Link>
            
        </ul>
        
    </div>
    <div className= 'items-center text-white pt-[200px] px-[10%] w-[60%]'>
        <p>Hello! Welcome to </p>
        <h2 className='text-6xl md:text-8xl font-bold py-8'>Readit blog</h2>
        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptatem quidem ea nobis incidunt consectetur dolor ut obcaecati laudantium ducimus!</p>
        
    </div>
    
    </div>
    
  )
}
