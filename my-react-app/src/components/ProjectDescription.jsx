import React from 'react'
import ProjectItemDescription from './ProjectItemDescription';

const VRcadeSuiteDetails = [
  'Designed, created, and implemented VRcade Suite: Darts',
  'Responsible for coming up for solutions for the player to navigate the game without the use of VR',
  'Created animations such as a trajectory line from the tip of the dart to allow players to see where they are aiming',
  'Created a dynamic camera effect which zooms in on the latest dart thrown to allow players to exactly where the dart landed',
  'Implemented an accessibility feature allowing the player to choose between playing as right handed or left handed',
  'Helped teammates come up with problems to challenging solutions such as ease of respawning and grabbing items'
];

const RecipeManagerDetails = [
  'Uses Coverage.py for running the tests',
  'Uses GitHub Actions to automate the testing, building, and deployment of the application',
  'Uses GitHub Actions to build and push an image of the application to a Docker repository'
];

const DrumDetails = [
  'Acted as a project leader and helped delegate responsibilities to maintain a healthy pace with a short deadline',
  'Was responsible for finding and cleaning up 3D assets in Blender for use in Unity',
  'Created and implemented all light sources'
];

const WebsiteDetails = [
  'Deployed as a static website using S3',
  'Uses CloudFront to employ HTTPS for security',
  'Points a custom DNS domain name to the CloudFront distribution using Amazon Route 53',
  'Uses Vite, React, and Tailwind for the frontend',
  'Tracks visitor count using a REST API, triggering a Lambda function to increment the count within a DynamoDB table',
];

function Details(items) {
  const listItems = items.map(item =>
    <li>{item}</li>
  );
  return <li>{listItems}</li>;
}

const data = [
    {
        title: 'VRcade Suite (Senior Project)',
        description: 'VRcade Suite is a suite of arcade games bult in Unity that uses the Leap Motion Controller 2 and the Ultraleap API. The Leap Motion Controller takes hand gestures as input allowing the player to interact with objects and play games as if they were at an arcade. Contrary to the title, this game is somewhere between VR and AR and does not employ a VR headset. Games include Darts, Skeeball, and Hoops',
        details: Details(VRcadeSuiteDetails)
    },
    {
        title: 'Recipe Manager',
        description: 'Final project for Testing & DevOps at UNR. Recipe Manager is a simple CLI program that allows users to create and manage a recipe book. The goal of this project was to implement unittests and integration tests of an object-oriented program and to implement automatic testing, building, and deployment of a Docker image of the program using Github Actions',
        details: Details(RecipeManagerDetails)
    },
    {
        title: 'VR Drums',
        description: 'Final project for Virtual Reality at UNR. We had roughly two weeks to create a game in Unity that is designed to help people. VR Drums is a simple drum simulator and acts as a guide on learning basic drum patterns',
        details: Details(DrumDetails)
    },
    {
        title: 'Portfolio Website',
        description: 'A personal website to showcase my school, work, and personal projects. This website is deployed as an Amazon S3 static website.',
        details: Details(WebsiteDetails)
    },
]

const ProjectDescription = () => {
  return (
    <div id='projectdescription' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 rounded-xl'>
        <h1 className='text-4xl font-bold text-center text-[#c75bc9]'>Projects</h1>
        {data.map((item, idx) => (
            <ProjectItemDescription
            key={idx}  
            title={item.title} 
            description={item.description}
            details={<ul className='list-disc pl-8'><li>{item.details}</li></ul>}/>
        ))}
    </div>    
  )
}

export default ProjectDescription