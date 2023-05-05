import Layout from '@/component/layout/Layout'
import React from 'react'

export default function contact() {
  return (

    <Layout>
        <div className='py-[10%]'>
          <h2 className='text-3xl mb-11'>Contact information</h2>
          <div className=' grid md:grid-cols-2 xl:grid-cols-4 justify-center'>
            <p className='text-gray-500'>Adress: 198 West 21th Street,<br />Suite 721 New York NY 10016</p>
            <p className='text-gray-500'>phone: <span className='text-black'>+ 1235 23355 98</span></p>
            <p className='text-gray-500'>Email: <span className='text-black'>info@yoursite.com</span></p>
            <p className='text-gray-500'>Website <span className='text-black'>yoursite.com</span></p>
          </div>
          <div className='mt-20 grid md:grid-cols-2 bg-gray-100'>
            <img src="image/map.png" alt="carte" className='h-full'/>
            <form action="" className='w-full p-[10%]'>
              
              <input type="text" name="name" id="" placeholder='your name' className='w-full border border-gray-400 p-3 my-4 rounded-md'/>
              
              <input type="email" name="email" id="" placeholder='your email' className='w-full border border-gray-400 p-3 my-4 rounded-md' />
              <input type="text" name="subject" id="" placeholder='subject' className='w-full border border-gray-400 p-3 my-4 rounded-md'/>
              
              <textarea name="" id="" cols="30" rows="5" placeholder='message' className='w-full border border-gray-400 p-3 my-4 rounded-md'></textarea>
              <button className='text-white py-3 px-10 bg-yellow-400 mt-3 rounded-md'>send Message</button>

            </form>
          </div>
        </div>
    </Layout>

    
    
  )
}
