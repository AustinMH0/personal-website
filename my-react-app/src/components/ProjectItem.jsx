import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { DiGithubFull } from "react-icons/di";

const ProjectItem = ({img, title, stack, link}) => {
  return (
    <div className='relative flex flex-col overflow-hidden items-center justify-center shadow-2xl shadow-[#3e2b3f] rounded-xl group hover:bg-gradient-to-r from-[#8d3481] via-[#83348d] to-[#34368d] gradient element-to-rotate'>
        <img src={img} alt={title} className='flex-1 w-full h-full object-cover rounded-xl group-hover:opacity-10'/> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
            <a target="_blank" href={link} className='flex justify-center items-center'>
              <FaGithub className='pr-1 align-middle cursor-pointer fill-white' size={30} />
              <DiGithubFull className='align-middle cursor-pointer fill-white' size={55} />
                {/* <p className='text-center p-2 rounded-lg bg-white text-stone-700 font-bold cursor-pointer text-lg'>
                  GitHub Link
                </p> */}
            </a>
        </div>
    </div>
  )
}

export default ProjectItem