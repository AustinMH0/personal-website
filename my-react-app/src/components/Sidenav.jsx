import React, {useState} from 'react';
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { FaPaintBrush } from "react-icons/fa";
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div>
        <AiOutlineMenu
        size={20}
        onClick={handleNav} 
        className='absolute ri-lg top-4 right-4 z-[99] fill-white md:hidden' 
        />
        {
            nav ? (
                <div className='fixed w-full h-screen bg-black/75 flex flex-col justify-center items-center z-20'>
                    <a onClick={handleNav} 
                        href='#main' 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gradient-to-r from-[#d4fcc3] via-[#c7fbb1] to-[#d4fcc3] gradient element-to-rotate shadow-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a onClick={handleNav}
                        href='#work' 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gradient-to-r from-[#d4fcc3] via-[#c7fbb1] to-[#cafab5] gradient element-to-rotate shadow-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </a>
                    <a onClick={handleNav}
                        href='#projectdescription' 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gradient-to-r from-[#d4fcc3] via-[#c7fbb1] to-[#cafab5] gradient element-to-rotate shadow-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a onClick={handleNav}
                        target="_blank"
                        href='./resume/' 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gradient-to-r from-[#d4fcc3] via-[#c7fbb1] to-[#cafab5] gradient element-to-rotate shadow-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a onClick={handleNav}
                        href='#graphicdesign' 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gradient-to-r from-[#d4fcc3] via-[#c7fbb1] to-[#cafab5] gradient element-to-rotate shadow-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <FaPaintBrush size={20} />
                        <span className='pl-4'>Graphic Design</span>
                    </a>
                    <a onClick={handleNav}
                        href='#contact' 
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gradient-to-r from-[#d4fcc3] via-[#c7fbb1] to-[#cafab5] gradient element-to-rotate shadow-green-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                    >
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact</span>
                    </a>
                </div>
            ) : (
                ''
            )
        }
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' className='rounded-full shadow-sm bg-gray-100 shadow-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20} />
                </a>
                <a href='#work' className='rounded-full shadow-sm bg-gray-100 shadow-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20} />
                </a>
                <a href='#projectdescription' className='rounded-full shadow-sm bg-gray-100 shadow-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20} />
                </a>
                <a style={{display: "table-cell"}} target="_blank" href='./resume/' className='rounded-full shadow-sm bg-gray-100 shadow-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20} />
                </a>
                <a href='#graphicdesign' className='rounded-full shadow-sm bg-gray-100 shadow-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaPaintBrush size={20} />
                </a>
                <a href='#contact' className='rounded-full shadow-sm bg-gray-100 shadow-pink-200 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20} />
                </a>
            </div>
        </div>

    </div>
  );
};

export default Sidenav;