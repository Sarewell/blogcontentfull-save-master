import CardAbout from '@/component/card/CardAbout'
import Layout from '@/component/layout/Layout'
import React from 'react'
import { GrFormNext } from 'react-icons/gr'

export default function About() {
  return (
    <Layout>
      <div className='pb-[10%]'>
        <div className='grid lg:grid-cols-2 gap-8'>
          <div className='relative'>
            <img src="image/img_about.jpg" alt="" className='h-full' />
            <GrFormNext className='absolute left-[45%] lg:left-[94%] bottom-1/2  text-6xl z-20 bg-yellow-400 rounded-full'></GrFormNext>
          </div>
          <div className='p-[10%]'>
            <p className='text-gray-300 font-bold'>welcome to readit</p>
            <h2 className='text-2xl font-black'>We give you the best articles you want.</h2>
            <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eaque similique placeat quis!</p>
            <div className=' grid grid-cols-1 sm:grid-cols-3 gap-2 font-bold py-3'>
              <button className='border border-gray-400 py-1 px-6 rounded-sm swap-active active:bg-yellow-400 active:text-white active:border-transparent'>Our Mission</button>
              <button className='border border-gray-400 py-1 px-6 rounded-sm swap-active active:bg-yellow-400 active:text-white active:border-transparent'> Our Vision</button>
              <button className='border border-gray-400 py-1 px-6 rounded-sm swap-active active:bg-yellow-400 active:text-white active:border-transparent '>Our Value</button>
            </div>
            <p className='py-6 px-3 bg-slate-100 w-full text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe earum nostrum in sit officia error provident, velit porro soluta labore totam vel a. Voluptatibus blanditiis repellat itaque at eius incidunt cumque magnam, qui suscipit!</p>
          </div>
        </div>
        <div className='mt-32'>
          <div className='mb-20 text-center'>
            <p className='text-gray-300 font-bold'>testimonial</p>
            <h2 className='text-4xl font-black'>Happy Clients</h2>
          </div>
          <div className=' lg:grid grid-cols-3 mb-10 gap-10 justify-center'>
            <div>
              <CardAbout
            image= "image/image_1.jpg"
              />
            </div>
            <div className='hidden lg:block'>
              <CardAbout
              image= "image/image_1.jpg"
              />
            </div>
            <div className='hidden lg:block'>
              <CardAbout
              image= "image/image_1.jpg"
              />
            </div>
          </div>
        </div>
        <div className='flex justify-center gap-3'>
          <input type="radio" name="" id="" className='active:bg-yellow-300' />
          <input type="radio" name="" id="" className='active:bg-yellow-300'/>
          <input type="radio" name="" id="" className='active:bg-yellow-300'/>
          <input type="radio" name="" id="" className='active:bg-yellow-300'/>
          <input type="radio" name="" id="" className='active:bg-yellow-300'/>
        </div>
      </div>
    </Layout>
    
      
  )
}
