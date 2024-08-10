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

