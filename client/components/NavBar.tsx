import React from 'react'
import { CiBag1, CiSearch } from 'react-icons/ci'

const NavBar = () => {

  return (
    <div className='mb-5'>
      <nav className='flex justify-between mt-6'>
        <div className=' w-1/4 flex justify-center items-center'>
          <h1 className='text-accent font-sans font-semibold text-lg'>FurniTrove</h1>
        </div>
        <div className='flex  w-10/12 justify-center gap-16 items-center text-accent'>
          <h1>Home</h1>
          <h1>Reviews</h1>
          <h1>Contact</h1>
          <h1>About us</h1>
        </div>
        <div className='flex   w-1/4 justify-center gap-4 items-center text-accent'>
        <CiSearch size={35}/>
        <CiBag1 size={35}/>
        </div>
      </nav>
    </div>
  )
}

export default NavBar