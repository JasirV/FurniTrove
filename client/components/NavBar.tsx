import React from 'react'
import { CiBag1, CiSearch } from 'react-icons/ci'
import { TiThMenuOutline } from "react-icons/ti";

const NavBar = () => {

  return (
    <div className='mb-5'>
      <nav className='flex justify-between mt-6'>
        <div className=' w-1/4 flex justify-center items-center'>
          <h1 className='text-accent font-sans font-semibold text-lg mx-2 md:mx-0'>FurniTrove</h1>
        </div>
        <div className='hidden  w-10/12 justify-center gap-16 items-center text-accent md:flex'>
          <h1>Home</h1>
          <h1>Reviews</h1>
          <h1>Contact</h1>
          <h1>About us</h1>
        </div>
        <div className='md:flex hidden w-1/4 justify-center gap-4 items-center text-accent'>
        <CiSearch size={35}/>
        <CiBag1 size={35}/>
        </div>
        <div className='flex md:hidden text-accent mx-2'>
        <TiThMenuOutline size={20} />
        </div>
      </nav>
    </div>
  )
}

export default NavBar