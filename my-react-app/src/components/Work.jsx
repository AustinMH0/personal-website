import React from 'react';
import WorkItem from './WorkItem';

const data = [
    {
        year: '2019 - 2024',
        title: 'Town Cutler',
        duration: '5 years',
        details:
        'Made handmade knives using an array of tools such as belt grinders, bandsaws, and drill presses. I was responsible for shaping handles made out of resin and wood that had complex facets and refining these handles up to 600 grit.'
        // Trained in using grinders, belt sanders, files, and sandpaper for precise metal and wood shaping and finishing,
        // Trained in using bandsaws, hacksaws, and drill presses for precise cutting and drilling
        // Proficient in using calipers, rulers, and center punches for accurate measurement and layou
        // Proficient in maintaining safety standards, including the use of a dust mask and safety gea
        // Experience in training coworkers to achieve higher levels of mastery to allow them to take on more complicated tasks
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 rounded-xl'>
        <h1 className='text-4xl font-bold text-center text-[#c531c8]'>Work</h1>
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