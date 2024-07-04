import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='grid grid-cols-2 items-center h-[90vh]'>
        <div className='flex flex-col justify-center gap-3'>
            <p className='text-[19px] font-medium'>Hey, I am John</p>
            <h3 className='text-[60px] font-bold leading-[70px]'>I create <span className='text-[#5E3BEE]'>product design</span> and brand experience</h3>
            <p className='text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sint illo rem in vero reprehenderit odio mollitia, animi similique culpa! Consequatur alias sed praesentium a aliquam mollitia debitis ut eos.</p>
            <Link to={'/contact'} className='bg-[#5E3BEE] text-[#fff] w-[150px] py-[10px] text-[18px] px-4 rounded-md'>Get In Touch</Link>
        </div>
        <div>
            <img src={require('../assets/images/banner image.png')} alt="" />
        </div>
      </div>

      <div className='flex flex-col justify-center h-[90vh]'>
        <div className='flex flex-col justify-center gap-3'>
            <p className='text-[19px] font-bold'>My Skills</p>
            <h3 className='text-[40px] font-medium'>My Expertise</h3>
        </div>
        <div className='grid grid-cols-4 gap-[20px]'>
                        {/* skills section 1 start */}
            <div className='shadow-2xl p-5 bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/icon 1.png')} alt="" />
                <div>
                   <p className='text-[23px] font-bold mb-5'>Strategy & Direction</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
                        {/* skills section 1 end */}

                        {/* skills section 2 start */}
            <div className='shadow-2xl p-5 bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/icon 2.png')} alt="" />
                <div>
                   <p className='text-[23px] font-bold mb-5'>Branding & Logo</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
                        {/* skills section 2 end */}
                       
                        {/* skills section 3 start */}
            <div className='shadow-2xl p-5 bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/icon 3.png')} alt="" />
                <div>
                   <p className='text-[23px] font-bold mb-5'>UI & UX Design</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
                        {/* skills section 3 end */}
                        
                        {/* skills section 4 start */}
            <div className='shadow-2xl p-5 bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/icon 4.png')} alt="" />
                <div>
                   <p className='text-[23px] font-bold mb-5'>Webflow Development</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                </div>
            </div>
                        {/* skills section 4 end */}
        </div>
      </div>
    </div>
    
  )
}

export default Home
