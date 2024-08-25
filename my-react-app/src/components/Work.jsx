import React from 'react';
import WorkItem from './WorkItem';
import imgUrl from '../assets/Untitled-2.png'

const dataDetails = [
  'Trained in using belt grinders, disk grinders, files, and sandpaper for precise metal and wood shaping and finishing',
  'Trained in using bandsaws and drill presses for precise cutting and drilling',
  'Proficient in using calipers, rulers, and center punches for accurate measurement when grinding blades and shaping handles',
  'Proficient in maintaining safety standards, including the use of a dust mask and other safety gear',
  'Experience in training coworkers to achieve higher levels of mastery to allow them to take on more complicated tasks'
];

const updatedDetails = dataDetails.map((detail)=>{
  return <li>{detail}</li>;
});

const data = [
    {
        year: '2019 - 2024',
        title: 'Town Cutler',
        duration: '5 years',
        description: 'Made handmade knives using an array of tools such as belt grinders, bandsaws, and drill presses. I was responsible for shaping handles made out of resin and wood that had complex facets and refining these handles up to 600 grit.',
        details: ''
    }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 rounded-xl'>
        <h1 className='text-4xl font-bold text-center text-[#c75bc9]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration}
            description={item.description}
            details={<ul className='list-disc pl-4'>{updatedDetails}</ul>}/>
        ))}
    </div>
  )
}

export default Work