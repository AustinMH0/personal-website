import React from "react";
import ReactDOM from 'react-dom/client';
import "./styles.css";
import "../index.css";

// Resume

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    
    <div className='max-w-[1040px] m-auto my-4 md:pl-20  py-16 p-20 rounded-md bg-white font-Spectral'>
        <h1 className=' text-2xl font-bold text-center'>Austin Hendricks</h1>
        <p className = 'text-center pb-3 text-base'>Reno, NV • <a target="_blank" href="https://austinhendricks.dev/" className="underline">https://austinhendricks.dev</a> • austinmhendricks@gmail.com</p>
        <h3 className = 'text-[15px] font-bold text: uppercase'>Education</h3>
        <hr className="border border-gray-500 mb-2"/>
        <div className="py-2">
            <p className='font-bold'>University of Nevada, Reno<span className = "float-right font-normal">December 2024 (Expected)</span></p>
            <p>Bachelor of Science, Computer Science & Engineering</p>
            <p>Cumulative GPA: 3.5, Dean’s List Fall 2023, Dean’s List Spring 2024</p>
            <p>Relevant Coursework: Data Structures, Programming Languages, Algorithms, Operating Systems, Software Engineering, Design Patterns, Testing and DevOps</p>
        </div>
        <h3 className = 'text-[15px] font-bold text: uppercase pt-2'>Work Experience</h3>
        <hr className="border border-gray-500 mb-2"/>
        <div className="py-2">
        <p className='font-bold'>Town Cutler<span className="font-normal"> - Knife Technician</span> <span className = "float-right font-normal">January 2019 – March 2024</span></p>
            <ul className="list-disc pl-7 pt-1 pb-2 text-justify">
                <li>Trained in using grinders, belt sanders, files, and sandpaper for precise metal and wood shaping and finishing</li>
                <li>Trained in using bandsaws, hacksaws, and drill presses for precise cutting and drilling</li>
                <li>Proficient in using calipers, rulers, and center punches for accurate measurement and layout</li>
                <li>Proficient in maintaining safety standards, including the use of a dust mask and safety gear</li>
                <li>Experience in training coworkers to achieve higher levels of mastery to allow them to take on more
                    complicated tasks</li>
            </ul>
        </div>
        <h3 className = 'text-[15px] font-bold text: uppercase'>Projects</h3>
        <hr className="border border-gray-500 mb-2"/>
        <div className="py-2">
            <p className='font-bold pt-2'>Portfolio Website -
                <a href="https://github.com/AustinMH0/personal-website"><span className="font-normal underline"> GitHub Repository</span></a></p>
            <ul className="list-disc pl-7 pt-1 pb-2 text-justify">
                <li>Deployed as a static website using S3</li>
                <li>Uses CloudFront to employ HTTPS for security</li>
                <li>Points a custom DNS domain name to the CloudFront distribution using Amazon Route 53</li>
                <li>Uses Vite, React, and Tailwind for the frontend</li>
                <li>Uses GitHub Actions to build and push an image of the application to a Docker <a href="https://hub.docker.com/r/austinmh/austin-hendricks-website/tags" className="underline">repository</a></li>
                <li>Tracks visitor count using a REST API, triggering a Lambda function to increment the count within a DynamoDB table</li>
                <li>Runs an E2E using Cypress that compares the visitor count value on the website against the value within the database</li>
                <li>Utilizes CI/CD using SAM and Github Actions to build and deploy backend</li>
            </ul>
            <p className='font-bold pt-2'>VRcade Suite (Senior Project) -
                <a href="https://github.com/LuisRamirezTorres/CS425-Senior-Project"><span className="font-normal underline"> GitHub Repository</span></a></p>
            <ul className="list-disc pl-7 pt-1 pb-2 text-justify">
                <li>A suite of arcade games implemented in Unity using the Leap Motion Controller 2 and Ultraleap’s API</li>
                <li>Takes hand gestures as input to control and navigate a suite of games, showcasing the Leap Motion’s real time detection
                    of hand gestures, object and UI interaction, and minute details such as pinch or grab strength</li>
            </ul>
            <p className='font-bold pt-2'>Recipe Manager -
                <a href="https://github.com/AustinMH0/CS333-Final-Project"><span className="font-normal underline"> GitHub Repository</span></a></p>
            <ul className="list-disc pl-7 pt-1 pb-2 text-justify">
                <li>An object-oriented python program designed to showcase Unit Testing, Integration Testing, and automatic testing, building and deployment of an application</li>
                <li>Uses Coverage.py for running the tests</li>
                <li>Uses GitHub Actions to automate the testing, building, and deployment of the application</li>
                <li>Uses GitHub Actions to build and push an image of the application to a Docker <a href="https://hub.docker.com/r/austinmh/cs333finalproject/tags" className="underline">repository</a></li>
            </ul>
        </div>
        <h3 className = 'text-[15px] font-bold text: uppercase'>Additional</h3>
        <hr className="border border-gray-500 mb-2"/>
        <div className="py-2">
        <p className='font-bold'>Technical Skills:<span className="font-normal"> AWS, C#, C++, Docker, Git and GitHub, GitHub Actions, Java, Linux, Python, React, Unity</span></p>  
        </div>
    </div>

  </React.StrictMode>,
);