import React from 'react'

function Testimonial() {
  return (
    <div className='bg-[#F5FCFF]'>
    <div className='max-w-[1400px] mx-auto'>
    <div className='flex flex-col justify-center h-[90vh]'>
      <div className='flex flex-col justify-center gap-3'>
          <p className='text-[19px] font-bold'>Clients Feedback</p>
          <h3 className='text-[50px] font-bold mb-5'>Customer testimonials</h3>
      </div>
      <div className='grid grid-cols-3 gap-[20px]'>
                      {/* Testimonial section 1 start */}
          <div className='bg-[#F5FCFF] rounded-[10px] border-[#006B6A] border-[1px]'>
            <div className='flex px-10 mt-10 my-5'>
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            </div>
              <div className='px-10'>
                 <p className='text-[23px] font-bold mb-5'>Ahuse</p> 
                 <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='grid grid-cols-[20%_Auto] mt-5'>
                    <div><img className='w-[60px]' src={require('../assets/images/Avatar Image1.png')} alt="" /></div>
                    <div className='flex flex-col pb-10'>
                        <h4 className='font-bold text-[20px]'>Dianne Russell</h4>
                        <p>Starbucks</p>
                    </div>
                </div>
              </div>
          </div>
                      {/* Testimonial section 1 end */}

                      {/* Testimonial section 2 start */}
                      <div className='bg-[#F5FCFF] rounded-[10px] border-[#006B6A] border-[1px]'>
            <div className='flex px-10 mt-10 my-5'>
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            </div>
              <div className='px-10'>
                 <p className='text-[23px] font-bold mb-5'>Ahuse</p> 
                 <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='grid grid-cols-[20%_Auto] mt-5'>
                    <div><img className='w-[60px]' src={require('../assets/images/Avatar Image2.png')} alt="" /></div>
                    <div className='flex flex-col pb-10'>
                        <h4 className='font-bold text-[20px]'>Kristin Watson</h4>
                        <p>Louis Vuitton</p>
                    </div>
                </div>
              </div>
          </div>
                      {/* Testimonial section 2 end */}
                     
                      {/* Testimonial section 3 start */}
          <div className='bg-[#F5FCFF] rounded-[10px] border-[#006B6A] border-[1px]'>
            <div className='flex px-10 mt-10 my-5'>
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            <img src={require('../assets/images/Vector.png')} alt="" />
            </div>
              <div className='px-10'>
                 <p className='text-[23px] font-bold mb-5'>Ahuse</p> 
                 <p className='text-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='grid grid-cols-[20%_Auto] mt-5'>
                    <div><img className='w-[60px]' src={require('../assets/images/Avatar Image3.png')} alt="" /></div>
                    <div className='flex flex-col pb-10'>
                        <h4 className='font-bold text-[20px]'>Kathryn Murphy</h4>
                        <p>McDonald's</p>
                    </div>
                </div>
              </div>
          </div>
                      {/* Testimonial section 3 end */}
                      
      </div>
    </div>
  



  </div>
  </div>
  )
}

export default Testimonial
