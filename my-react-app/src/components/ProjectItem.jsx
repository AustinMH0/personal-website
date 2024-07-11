import React from 'react'

const ProjectItem = ({img, title, stack}) => {
  return (
    <div className='relative flex items-center justify-center h-fit w-full shadow-2xl shadow-[#312431] rounded-xl group hover:bg-gradient-to-r from-gray-900 to-[#c531c8]'>
        <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
            <a href='/'>
                <p className='text-center p-3  rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem