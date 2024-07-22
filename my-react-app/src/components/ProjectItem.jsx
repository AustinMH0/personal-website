import React from 'react'

const ProjectItem = ({img, title, stack, link}) => {
  return (
    <div className='relative flex items-center justify-center h-fit w-full shadow-2xl shadow-[#000000] rounded-xl group hover:bg-gradient-to-r from-[#8d3453] via-[#83348d] to-[#34368d] gradient element-to-rotate'>
        <img src={img} alt={title} className='rounded-xl group-hover:opacity-10'/> 
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className='pb-4 pt-2 text-white text-center'>{stack}</p>
            <a style={{display: 'inline'}} target="_blank" href={link}>
                <p className='text-center p-2 rounded-lg bg-white text-stone-700 font-bold cursor-pointer text-lg'>
                  More Info
                </p>
            </a>
        </div>
    </div>
  )
}

export default ProjectItem