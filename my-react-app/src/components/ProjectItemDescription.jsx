import React from 'react'

const ProjectItemDescription = ({title, description, details}) => {
  return (
    <div className="relative mb-3">
        <h6 className="mb-0">
          <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-white rounded-t-1"
            data-collapse-target="collapse-1"
          >
            <span>{title}</span>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
          </button>
        </h6>
        <div
          data-collapse="collapse-1"
          className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            We're not always in the position that we want to be at. We're constantly
            growing. We're constantly making mistakes. We're constantly trying to
            express ourselves and actualize our dreams.
          </div>
        </div>
    </div>

  )
}



export default ProjectItemDescription



{/* <div className="relative mb-3">
    <h6 className="mb-0">
        <button
            className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
            data-collapse-target="collapse-1"
        >
            <span classNameName='text-lg font-semibold text-[#c531c8]'>{title}</span>
            <p classNameName='my-2 text-base text-justify font-normal text-[#c984ca]'>{description}</p>
            <i className="absolute right-0 pt-1 text-xs fa fa-plus group-open:opacity-0"></i>
            <i className="absolute right-0 pt-1 text-xs opacity-0 fa fa-minus group-open:opacity-100"></i>
        </button>
    </h6>
    <div
        data-collapse="collapse-1"
        className="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
            <ul classNameName='my-2 text-base font-normal text-stone-300'>
                <li>{details}</li>
            </ul>
        </div>
    </div>
</div> */}

    // <ol classNameName='flex flex-col md:flex-row relative border-l border-stone-200'>
    //     <li classNameName='mb-10 ml-4'>
    //         <div classNameName='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'/>
    //         <p classNameName='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
    //             <span classNameName='text-lg font-semibold text-[#c531c8]'>{title}</span>
    //         </p>
    //         <p classNameName='my-2 text-base text-justify font-normal text-[#c984ca]'>{description}</p>
    //         <ul classNameName='my-2 text-base font-normal text-stone-300'>
    //           <li>{details}</li>
    //         </ul>
    //     </li>
    // </ol>