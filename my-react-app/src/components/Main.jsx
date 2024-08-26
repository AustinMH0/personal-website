import React from 'react';
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import imgUrl from '../assets/lava_background.jpg'

const Main = () => {
  return (
    <div id='main' className='bg-[#020102]'>
        <img 
          className='w-full h-screen object-cover object-left rounded-b-lg shadow-xl shadow-[#020102]' 
          src={imgUrl} 
          alt='background image depicting lava blobs'
        />
        <div className='border-solid border-2 blur-sm border-[#020102]'/>
        <div className='w-full h-screen absolute top-0 left-0'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-stone-200'>Austin Hendricks</h1>
          {/* <h2 className='flex sm:text-3xl text-2xl pt-4 text-stone-200'>
            I'm 
            <TypeAnimation
              sequence={[
                'a Developer',
                2000, 
                'an Engineer',
                2000,
                'a Graphic Designer',
                2000,
              ]}
              wrapper='div'
              speed={50}
              style={{ fontSize: '1em', paddingLeft: '5px' }}
              repeat={Infinity}
            />
          </h2> */}
          <div className='flex justify-between pt-6 max-w-[200px] w-full'>
            <a style={{display: "table-cell"}} target="_blank" href='https://www.instagram.com/renderloop_/'>
              <FaInstagram  className='cursor-pointer fill-white' size={20} />
            </a>
            <a style={{display: "table-cell"}} target="_blank" href='https://www.linkedin.com/in/austin-hendricks-a57b5b103/'>
              <FaLinkedinIn className='cursor-pointer fill-white' size={20} />
            </a>
            <a style={{display: "table-cell"}} target="_blank" href='https://github.com/AustinMH0'>
              <FaGithub className='cursor-pointer fill-white' size={20} />
            </a>
            <a style={{display: "table-cell"}} target="_blank" href='./resume/'>
              <p className='text-black font-bold bg-white rounded-md mb-1 pl-1 pr-1'>Resume</p>
            </a>
          </div>
          <div className='justify-center italic text-stone-200 pt-4 sm:flex-col sm:justify-center sm:items-center'>
            <p><span className='text-[#c75bc9]'>Visitor Count: </span><span className='text-[#5bdc50]' id='visitor_counter' /></p>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Main 