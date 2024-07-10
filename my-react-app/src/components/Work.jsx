import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: '2019 - 2024',
        title: 'Town Cutler',
        duration: '5 years',
        details:
        'Made handmade knives using an array of tools such as belt grinders, bandsaws, and drill presses. I was responsible for shaping handles made out of resin and wood that had complex facets.'
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#000000]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}/>
        ))}

    </div>
  )
}

export default Work