import React, {useState} from 'react'

const Accordion = ({title, description, details}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);
    return (
        <div className='py-2'>
            <h2 className='text-pink-500 text-lg'>{title}</h2>
            <button 
                onClick={() => setAccordionOpen(!accordionOpen)} 
                className='flex justify-between w-full'
            >
                <span className='pb-2 text-stone-300 text-justify'>{description}</span>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="fill-pink-500 shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                      }`}
                    />
                    <rect
                      y="7"
                      width="16"
                      height="2"
                      rx="1"
                      className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                        accordionOpen && "!rotate-180"
                      }`}
                    />
                </svg>
                
            </button>
            <div className={`${
                accordionOpen
                ? 'mr-12 rounded-lg bg-gradient-to-r from-[#0a080a] from-5% via-[#EB60B1] via-15% to-[#0a080a] to-75% gradient element-to-rotate p-0.5'
                : 'bg-[#0a080a]'

            }`}>
                <div className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-r from-[#170912e7] from-40% to-[#0a080ae7] rounded-lg text-gray-200 py-2 text-sm ${
                    accordionOpen 
                    ? 'grid-rows-[1fr] opacity-100' 
                    : 'grid-rows-[0fr] opacity-0'
                    }`}>
                    <div className='overflow-hidden'>{details}</div>
                </div>
            </div>

        </div>
    );
};

export default Accordion;

// bg-gradient-to-l from-[#441b49] from-30% via-[#83348d] to-[#c149bf] gradient element-to-rotate

{/* <div className='rounded-lg bg-gradient-to-r from-[#AF60EB] via-[#EB60B1] to-[#8260EB] gradient element-to-rotate p-0.5'>
<div className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-black rounded-lg text-stone-300 py-2 text-sm ${
    accordionOpen 
    ? 'grid-rows-[1fr] opacity-100' 
    : 'grid-rows-[0fr] opacity-0'
    }`}>
    <div className='overflow-hidden'>{details}</div>
</div>
</div> */}