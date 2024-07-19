import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#c531c8]'>
            Contact
        </h1>
        <form 
        action='https://getform.io/f/bwngwxya' 
        method='POST' 
        encType='multipart/form-data'
        >
            <div className='grid md:grid-cols-2 gap-4 w-full py-2 text-stone-300'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-stone-300'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-purple-500 text-black' type='text' name='name'/>
                </div>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2 text-stone-300'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-purple-500 text-black' type='text' name='phone'/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-stone-300'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-purple-500 text-black' type='email' name='email'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-stone-300'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-purple-500 text-black' type='text' name='subject'/>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2 text-stone-300'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-purple-500' rows='10' name='message'></textarea>
            </div>
            <button className='bg-[#c531c8] text-stone-100 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}

export default Contact