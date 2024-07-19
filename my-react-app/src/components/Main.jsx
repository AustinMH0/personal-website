import React from 'react';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import imgUrl from '../assets/lava_background.jpg'

const Main = () => {
  return (
    <div id='main'>
        <img 
          className='w-full h-screen object-cover object-left rounded-b-md shadow-xl dark:shadow-gray-400' 
          src={imgUrl} 
          alt='background image depicting lava blobs'
        />
        <div className='border-solid border-2 border-black blur-sm'/>
        <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-stone-200'>I'm Austin Hendricks</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-stone-200'>
            I'm 
            <TypeAnimation
              sequence={[
                'a Developer',
                2000, 
                'an Engineer',
                2000,
                'an Event Organizer',
                2000,
              ]}
              wrapper='div'
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[75px] w-full'>
            <a href='https://www.instagram.com/renderloop_/'>
              <FaInstagram  className='cursor-pointer fill-white' size={20} />
            </a>
            <a href='https://www.linkedin.com/'>
              <FaLinkedinIn className='cursor-pointer fill-white' size={20} />
            </a>
          </div>
        </div>

        </div>
    </div>
  )
}

export default Main 