import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-[#F5FCFF] p-5'>
        <div className='max-w-[1400px] mx-auto'>
            <div className='grid grid-cols-3'>
                <div>
                    <img className='w-[150px]' src={require('../assets/images/Logo.png')} alt="" />
                </div>
                <div className='flex justify-center text-[16px] gap-5'>
                    <a href="#">Home</a>
                    <a href="#">Portolio</a>
                    <a href="#">About Me</a>
                    <a href="#">Contact</a>
                    <a href="#">Testimonial</a>
                </div>
                <div className='flex justify-end gap-4'>
                    <img className='h-[20px]' src={require('../assets/images/fb.png')} alt="" />
                    <img className='h-[20px]' src={require('../assets/images/insta.png')} alt="" />
                    <img className='h-[20px]' src={require('../assets/images/twitter.png')} alt="" />
                    <img className='h-[20px]' src={require('../assets/images/linkedi.png')} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
