import React from 'react'
import MiniCard from '../card/MiniCard'
import Link from 'next/link';
import { createClient } from 'contentful';
import { GrFacebook, GrInstagram, GrLocation, GrMail, GrPhone, GrPhoneVertical, GoChevronRight,  GrTwitter, GrFormNext } from "react-icons/gr";

export default function Foooter() {
  return (
    <div className='bg-gray-500 text-white'>
      <div className='md:grid xl:grid-cols-4 md:grid-cols-2 gap-10 px-[10%] py-8 w-full' >
        
        <div>
          <h2 className='text-white font-black pb-4 text-2xl'>read<span className='text-yellow-400 '>it</span>.</h2>
          <p className='text-gray-300 font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis natus reiciendis adipisci sed perspiciatis totam ea vero in fuga!</p>
          <div className='flex pt-10 gap-8 justify-center text-6xl'>
            <GrTwitter className='bg-gray-600 p-3 rounded-full'></GrTwitter><GrFacebook className='bg-gray-600 p-3 rounded-full'></GrFacebook><GrInstagram className='bg-gray-600 p-3 rounded-full'></GrInstagram>
          </div>
        </div>
        <div>
          <h3 className='pb-4 text-xl font-bold'>latest News</h3>
          <div className='flex py-2'>
            <img src="image/image_1.jpg" alt="voiture" className='rounded-sm h-20 w-20 m-3' />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam!</p>
              <p className='font-light'>Oct 16 2019 Admin 19</p>
            </div>
            
          </div>
          <div className='flex py-2'>
            <img src="image/image_2.jpg" alt="voiture" className='rounded-sm h-20 w-20 m-3' />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam!</p>
              <p className='font-light'>Oct 16 2019 Admin 19</p>
            </div>
            
          </div>
        </div>
        <div>
          <h3 className='pb-8 text-xl font-bold'>Imformation</h3>
          <ul >
            <Link href='/' >
              <li className='pb-4 capitalize flex items-center'><GrFormNext className='text-white text-xl'></GrFormNext>home</li>
            </Link>
            <Link href='/about'>
              <li className='pb-4 capitalize flex items-center'><GrFormNext className='text-white text-xl'></GrFormNext>about</li>
            </Link>
            <Link href='/contact'>
              <li className='pb-4 flex items-center capitalize'><GrFormNext className='text-white text-xl'></GrFormNext>contact</li>
            </Link>
            <Link href='/post/'>
              <li className='pb-4 capitalize flex items-center'><GrFormNext className='text-white text-xl'></GrFormNext>post</li>
            </Link>
          </ul>
        </div>
        <div>
          <h3 className='pb-8 text-xl font-bold'>Have a Question?</h3>
          <p className='pb-2 flex gap-2'><GrLocation className='text-white text-2xl'></GrLocation> 203 FAke St. Mountain View,</p>
          <p className='pb-4 ml-8'>San Fransico, California, USA</p>
          <p className='pb-4 flex gap-2'><GrPhone className='text-white text-2xl'></GrPhone><span>+2 392 3929 210</span> </p>
          <p className='pb-4 flex gap-2'><GrMail className='text-white text-2xl'></GrMail> info@yourdomain.com</p>
        </div>
      
      
      </div>
      <div className='flex justify-center pb-6'>
        <p>Copyright &#xa9; 2023 All right reserved | This template is made with &#x2764; by nicolas </p>
      </div>
    </div>
  )
}
  export async function getStaticProps( ) {
//1 connect to contentful
const client = createClient({
  space:process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken:process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

//2 recuperer data en cas de success pour le content_type => escciBlog
//je limite a 8 posts
const data = await client.getEntries({
  content_type: 'blogescci',
  order:"sys.createdAt",
  limit: 2,
});

console.log(data);
//3.on envoie la data ds le props de ma page
return{
  props:{
    posts:data.items,
    }
  }
}