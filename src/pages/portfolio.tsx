import React from 'react'

function Portfolio() {
  return (
    <div className='max-w-[1400px] mx-auto'>
      <div className='flex flex-col justify-center h-[90vh]'>
        <div className='flex flex-col justify-center gap-3'>
            <p className='text-[19px] font-bold'>Recent Projects</p>
            <div className='flex justify-between'>
            <h3 className='text-[40px] font-medium mb-5'>My Portfolio</h3>
            <a href='https://dribbble.com/' className='bg-[#E62872] text-white flex items-center px-4 rounded-[10px] h-[60px] gap-3'><img className='w-[25px]' src={require('../assets/images/dribller.png')} alt="" /> Visit My Dribbble</a>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-[20px]'>
                        {/* skills section 1 start */}
            <div className='shadow-2xl bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/p-1.png')} alt="" />
                <div className='p-10'>
                   <p className='text-[23px] font-bold mb-5'>Ahuse</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                   <button className='flex gap-2 items-center border-b-[2px] border-[#5E3BEE] py-[5px]'>View in Dribble <img className='w-[10px]' src={require('../assets/images/arrow.png')} alt="" /></button>
                </div>
            </div>
                        {/* skills section 1 end */}

                        {/* skills section 2 start */}
            <div className='shadow-2xl bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/p2.png')} alt="" />
                <div className='p-10'>
                   <p className='text-[23px] font-bold mb-5'>App Dashboard</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                   <button className='flex gap-2 items-center border-b-[2px] border-[#5E3BEE] py-[5px]'>View in Dribble <img className='w-[10px]' src={require('../assets/images/arrow.png')} alt="" /></button>
                </div>
            </div>
                        {/* skills section 2 end */}
                       
                        {/* skills section 3 start */}
            <div className='shadow-2xl bg-[#F5FCFF] rounded-[10px] border-b-[5px] border-[white] hover:border-b-[5px] hover:border-[#5E3BEE] duration-100'>
                <img src={require('../assets/images/p3.png')} alt="" />
                <div className='p-10'>
                   <p className='text-[23px] font-bold mb-5'>Easy Rent</p> 
                   <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                   <button className='flex gap-2 items-center border-b-[2px] border-[#5E3BEE] py-[5px]'>View in Dribble <img className='w-[10px]' src={require('../assets/images/arrow.png')} alt="" /></button>
                </div>
            </div>
                        {/* skills section 3 end */}
                        
        </div>
      </div>




    </div>
  )
}

export default Portfolio
