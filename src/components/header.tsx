import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-[#fff] p-2 shadow-xl fixed top-0 w-full z-[50]'> 
      <div className='max-w-[1400px] mx-auto flex justify-between items-center'>
        <div>
            <Link to={'/'}>
            <img className='w-[250px]' src={require('../assets/images/Logo.png')} alt="" />
            </Link>
            </div>
        <div className='text-[20px] flex gap-3'>
            <NavLink className="px-2 py-1 hover:bg-[#5E3BEE] duration-100 hover:text-white rounded-[5px]" to={'/'}>Home</NavLink>
            <NavLink className="px-2 py-1 hover:bg-[#5E3BEE] duration-100 hover:text-white rounded-[5px]" to={'/portfolio'}>Portfolio</NavLink>
            <NavLink className="px-2 py-1 hover:bg-[#5E3BEE] duration-100 hover:text-white rounded-[5px]" to={'/aboutme'}>About Me</NavLink>
            <NavLink className="px-2 py-1 hover:bg-[#5E3BEE] duration-100 hover:text-white rounded-[5px]" to={'/testimonial'}>Testimonial</NavLink>
        </div>
        <div>
            <NavLink to={'/contact'} className='hover:bg-[#5E3BEE] hover:text-white duration-100  border-[1px] border-[#5E3BEE] text-[#5E3BEE] rounded-[5px] px-4 py-2 text-[19px]'>Contact us</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
