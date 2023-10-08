import Image from 'next/image'
import NavBar from './(components)/sidenavbar/navBar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='flex'>
        <div>
          <NavBar />
        </div>
        <div>
        <div className='card-div'>
          <div className='card-1 mx-10'>
            <div>245</div>
            <Link href='/student'>Total Students</Link>
          </div>
          <div className='card-1 mx-10'>
          <div>7</div>
            <Link href='/course'>Total Courses</Link>
          </div>
          <div className='card-1 mx-10'>
          <div>157</div>
            <Link href='/student'>Presents Students</Link>
          </div>
          {/* <div className='card-1'>2222</div> */}
        </div>
      </div>
      </div>
    </>
  )
}
