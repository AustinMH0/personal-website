import React from 'react'

const WorkItem = ({year, title, duration, description, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block px-2 py-1 font-semibold text-white bg-[#c531c8] rounded-md'>{year}</span>
                <span className='text-lg font-semibold text-[#c531c8]'>{title}</span>
                <span className='my-1 text-sm font-normal leading-none text-stone-300'>{duration}</span>
            </p>
            <p className='my-2 text-base font-normal text-stone-300'>{description}</p>
            {/* <div class="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
              <div class="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                <div class="flex h-full w-full items-center justify-center bg-gray-800 back">
                  <h1 class="text-2xl font-black text-white">the quick brown fox jumps over the lazy dog</h1>
                </div>
              </div>
            </div> */}
            <ul className='my-2 text-base font-normal text-stone-300'>
              <li>{details}</li>
            </ul>
        </li>
    </ol>
  )
}

export default WorkItem