import React from 'react';
import Accordion from './Accordion';

const ProjectItemDescription = ({title, description, details}) => {
  return (
    <div className='p-4 bg-black rounded-lg'>
      <Accordion 
        title= {title}
        description={description}
        details={details}
      />
    </div>
  )
}



export default ProjectItemDescription

    // <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
    //     <li className='mb-10 ml-4'>
    //         <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
    //         <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
    //             <span className='text-lg font-semibold text-[#c531c8]'>{title}</span>
    //         </p>
    //         <p className='my-2 text-base text-justify font-normal text-[#c984ca]'>{description}</p>
    //         <ul className='my-2 text-base font-normal text-stone-300'>
    //           <li>{details}</li>
    //         </ul>
    //     </li>
    // </ol>
