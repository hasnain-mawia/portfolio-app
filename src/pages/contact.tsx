import React, { useState } from 'react'

function Contact() {
    const [errors, seterrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        selectoption:"",
        message:"",
        acceptTerms:"",
    })


    const handleSubmit =(e:any) =>{
        e.preventDefault()
        
        const validationErrors:any = {};
        if(!values.firstname.trim()){
        validationErrors.firstname = "Firstname Must required"
        }
        if(!values.lastname.trim()){
        validationErrors.lastname = "Lastname Must required"
        }
        if(!values.email.trim()){
        validationErrors.email = "Email Must required"
        }
        else if(!values.email.match(/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/)){
            validationErrors.email = "Email not valid"
        }
        if(!values.phone.trim()){
        validationErrors.phone = "Contact Number Must required"
        }
        if(!values.selectoption.trim()){
        validationErrors.selectoption = "Please Choice an option"
        }
        if(!values.message.trim()){
        validationErrors.message = "Write for Us"
        }
        if(!values.acceptTerms.trim()){
        validationErrors.acceptTerms = "Please Check"
        }
        
        seterrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
        console.log(values.firstname, values.lastname, values.email, values.phone, values.selectoption, values.message, values.acceptTerms)
        alert('Form submitted Successfully')
        setvalues({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        selectoption:"",
        message:"",
        acceptTerms:"",
        })
    }
    }


  return (
    <div className='max-w-[1400px] mx-auto'>
    <div className='flex flex-col justify-center h-screen'>
      <div className='flex flex-col justify-center items-center gap-3'>
          <p className='text-[19px] font-medium'>Get In Touch</p>
          <h3 className='text-[45px] font-bold '>Contact me</h3>
          <p className='text-[19px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
        <div className='w-[700px] mx-auto mt-10'>
            <form onSubmit={handleSubmit} action="">
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                        <label className='my-2' htmlFor="">First name</label>
                        <input onChange={(e)=>setvalues({...values, firstname:e.target.value})} type="text" className='border-[1px] border-[#5E3BEE] w-full p-2 rounded-md'/>
                        {errors.firstname && <span className='text-[14px] text-[red]'>{errors.firstname}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='my-2' htmlFor="">Last name</label>
                        <input onChange={(e)=>setvalues({...values, lastname:e.target.value})} type="text" className='border-[1px] border-[#5E3BEE] w-full p-2 rounded-md'/>
                        {errors.lastname && <span className='text-[14px] text-[red]'>{errors.lastname}</span>}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col'>
                        <label className='my-2' htmlFor="">Email</label>
                        <input onChange={(e)=>setvalues({...values, email:e.target.value})} type="email" className='border-[1px] border-[#5E3BEE] w-full p-2 rounded-md'/>
                        {errors.email && <span className='text-[14px] text-[red]'>{errors.email}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <label className='my-2' htmlFor="">Phone Number</label>
                        <input onChange={(e)=>setvalues({...values, phone:e.target.value})} type="number" className='border-[1px] border-[#5E3BEE] w-full p-2 rounded-md'/>
                        {errors.phone && <span className='text-[14px] text-[red]'>{errors.phone}</span>}
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='flex flex-col'>
                        <label className='my-2' htmlFor="">Choice a topic</label>
                        <select onChange={(e)=>setvalues({...values,selectoption:e.target.value})} className='border-[1px] border-[#5E3BEE] w-full p-2 rounded-md' name="" id="">
                            <option value="DEFAULT" disabled selected>Select One</option>
                            <option value="Option-1">Option 1</option>
                            <option value="Option-2">Option 2</option>
                            <option value="Option-3">Option 3</option>
                            <option value="Option-4">Option 4</option>
                            <option value="Option-5">Option 5</option>
                            <option value="Option-6">Option 6</option>
                        </select>
                        {errors.selectoption && <span className='text-[14px] text-[red]'>{errors.selectoption}</span>}
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='flex flex-col'>
                        <label className='my-2' htmlFor="">Message</label>
                        <textarea onChange={(e)=>setvalues({...values, message:e.target.value})} className='border-[1px] border-[#5E3BEE] w-full p-2 rounded-md' name="" id="" placeholder='Type your message'></textarea>
                        {errors.message && <span className='text-[14px] text-[red]'>{errors.message}</span>}
                        
                    </div>
                    <div className='flex gap-2'>
                    <input onChange={(e)=>setvalues({...values, acceptTerms:e.target.value})} type="checkbox" id="acpt-terms" name="I Accept the terms" value="acpt-terms"/>
                    <label htmlFor="acpt-terms"> I accept the terms</label>
                        {errors.acceptTerms && <span className='text-[14px] text-[red]'>{errors.acceptTerms}</span>}
                    </div>
                </div>
                <div className='flex justify-center mt-[20px]'>
                <button className='rounded-[5px] bg-[#5E3BEE] px-[30px] py-[15px] text-[white]'>Submit</button>
                </div>
            </form>
        </div>
    </div>




  </div>
  )
}

export default Contact
