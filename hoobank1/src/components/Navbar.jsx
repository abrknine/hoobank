import React, { useState } from 'react'
import { navLinks } from '../constant'
// import { useState } from 'react'
import {close,logo,menu} from '../assets'

const Navbar = () => {
  return (
    <div>
    <nav className='w-full flex py-6 justify-between items-center navbar bg-black'>
        <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />
        <ul className='list-none'>

        </ul>
    </nav>

      
    </div>
  )
}

export default Navbar
