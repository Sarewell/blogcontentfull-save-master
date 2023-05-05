
import NavBar from '../navigation/NavBar'
import Foooter from '../footer/Foooter'



export default function Layout({children}) {
  return (
    <div>
        <NavBar />
          <main className='px-[10%]'>{children}</main>
        <Foooter/>

    </div>
  )
}
