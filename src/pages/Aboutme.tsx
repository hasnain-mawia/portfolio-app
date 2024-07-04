import React from 'react'

function Aboutme() {
  return (
    <div className='max-w-[1400px] mx-auto'>
    <div className='grid grid-cols-2 items-center h-[90vh]'>
    <div>
          <img className='w-[500px]' src={require('../assets/images/About Me.png')} alt="" />
      </div>
      <div className='flex flex-col justify-center gap-3'>
          <p className='text-[19px] font-medium'>About Me</p>
          <h3 className='text-[60px] font-bold leading-[70px]'>About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
            <br/>
            <br/>
            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
      </div>
      
    </div>
  </div>
  )
}

export default Aboutme
