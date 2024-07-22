import React from 'react';
import ProjectItem from './ProjectItem';
import VRcadeSuiteImg from '../assets/VRCadeSuite_Darts.png';
import RecipeImg from '../assets/recipemanager.png';
import DrumsImg from '../assets/vr_drums.png';
import WebsiteImg from '../assets/personal_website.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#c847ca]'>Projects</h1>
        <p className='text-center text-stone-300 py-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio perferendis similique velit totam, quaerat, labore voluptas laboriosam ducimus omnis nihil odit, quod temporibus adipisci nisi autem libero distinctio doloremque. Recusandae.
        </p>
        <div className='grid sm:grid-cols-2 gap-12 text-stone-300'>
            <ProjectItem img={VRcadeSuiteImg} link='https://github.com/LuisRamirezTorres/CS425-Senior-Project' title='VRcade Suite' stack='Unity, C#' />
            <ProjectItem img={RecipeImg} link='https://github.com/AustinMH0/CS333-Final-Project' title='Recipe Manager' stack='Python, Coverage.py, Unittests, Github Actions, Docker' />
            <ProjectItem img={DrumsImg} link='https://github.com/AustinMH0/CS484-Final-Project' title='VR Drums' stack='Unity, C#' />
            <ProjectItem img={WebsiteImg} link='https://github.com/AustinMH0/personal-website' title='Portfolio Website' stack='React JS, Vite, Tailwind, S3, Cloudfront, Github Actions, Docker' />
        </div>
    </div>
  )
}

export default Projects