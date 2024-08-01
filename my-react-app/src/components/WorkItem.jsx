import React from 'react'

const WorkItem = ({year, title, duration, description, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-green-300'>
        <li className='mb-2 ml-4'>
            <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-white bg-gradient-to-r from-[#2a4e26] to-[#14ef00] gradient element-to-rotate'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
              <div className='p-px rounded-sm bg-gradient-to-r from-[#e7299b] from-10% to-[#14ef00] gradient element-to-rotate'>
                <span className='inline-block px-1 py-1 font-semibold text-[#c75bc9] bg-[#000000] rounded-sm'>{year}</span>
              </div>
                <span className='text-lg font-semibold text-[#c75bc9]'>{title}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-300'>{duration}</span>
            </p>
            <p className='my-2 text-base font-normal text-stone-300'>{description}</p>
            <ul className='my-2 marker:text-green-500 text-base font-normal text-stone-300'>
              <li>{details}</li>
            </ul>
        </li>
    </ol>
  )
}

export default WorkItem