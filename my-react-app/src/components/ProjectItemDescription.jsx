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

{/* <div classNameNameName="relative mb-3">
    <h6 classNameNameName="mb-0">
        <button
            classNameNameName="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-1"
        >
            <span className='text-lg font-semibold text-[#c531c8]'>{title}</span>
            <p className='my-2 text-base text-justify font-normal text-[#c984ca]'>{description}</p>
            <i classNameNameName="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i classNameNameName="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
        </button>
    </h6>
    <div
        data-collapse="collapse-1"
        classNameNameName="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    >
        <div classNameNameName="p-4 text-sm leading-normal text-blue-gray-500/80">
            <ul className='my-2 text-base font-normal text-stone-300'>
                <li>{details}</li>
            </ul>
        </div>
    </div>
</div> */}

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