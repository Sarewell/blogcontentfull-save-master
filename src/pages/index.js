import Card from '@/component/card/card';
import Layout from '@/component/layout/Layout'
import { createClient } from 'contentful'
import Link from 'next/link';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function Home({posts}) {
  console.log(posts);
  return (
    <Layout>
  
      <div className='md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-full max-h-full py-[10%]'>
        {
        posts.map(post=>(
          <Link href={`post/${post.fields.slug}`}
          key={post.sys.id} > 
          <Card 
          img={post.fields.fituredImage.fields.file.url}
          title={post.fields.title} 
          extract={post.fields.extract}
          date={post.fields.createdAt}
          />
          </Link>
        ))
      }
      </div>
      <div className='grid grid-cols-7 justify-center mb-[10%] gap-3 md:px-[30%] '>
        <button className='border border-gray-400  rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'><GrFormPrevious></GrFormPrevious></button>
        <button className='border border-gray-400 rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'>1</button>
        <button className='border border-gray-400  rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'>2</button>
        <button className='border border-gray-400  rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'>3</button>
        <button className='border border-gray-400  rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'>4</button>
        <button className='border border-gray-400  rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'>5</button>
        <button className='border border-gray-400  rounded-full swap-active active:bg-yellow-400 active:text-white active:border-transparent'><GrFormNext className='text-white text-xl'></GrFormNext></button>
      </div>
     
      
    </Layout>
  )}

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
  limit: 9,
});

console.log(data);
//3.on envoie la data ds le props de ma page
return{
  props:{
    posts:data.items,
    }
  }
}