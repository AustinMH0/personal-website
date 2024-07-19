import React from "react";
import ReactDOM from 'react-dom/client';
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    {/* <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="classNamesheet" type="text/css" href="className.css" /> 
        <title>Austin Hendricks' Resume</title>
    </head> */}


    <h1 className = "centered-header">Austin Hendricks</h1>
    <p className = "contact-info">Reno, NV • austinmhendricks@gmail.com • +1 (775) 830-8364</p>
    <h3 className = "sub-headers">Education</h3>
    <hr />
    <p><b>University of Nevada, Reno</b> <span className = "float: right">December 2024 (Expected)</span></p>
    <p>Bachelor of Science, Computer Science & Engineering</p>
    <p>Cumulative GPA: 3.5, Dean’s List 2023</p>
    <p className = "margin-bottom: .25in;">Relevant Coursework: Data Structures, Programming Languages, Algorithms, Operating Systems, Software Engineering, Design
        Patterns, Testing and DevOps</p>
    <h3 className = "sub-headers">Work Experience</h3>
    <hr />
    <p><b>Town Cutler</b> - Knife Technician <span className = "float: right">January 2019 – March 2024</span></p>
    <ul className="list-className-type:disc;">
        <li>Trained in using grinders, belt sanders, files, and sandpaper for precise metal and wood shaping and finishing</li>
        <li>Trained in using bandsaws, hacksaws, and drill presses for precise cutting and drilling</li>
        <li>Proficient in using calipers, rulers, and center punches for accurate measurement and layou</li>
        <li>Proficient in maintaining safety standards, including the use of a dust mask and safety gea</li>
        <li className = "margin-bottom: .25in;">Experience in training coworkers to achieve higher levels of mastery to allow them to take on more
            complicated tasks</li>
    </ul>
    <h3 className = "sub-headers">Projects</h3>
    <hr />
    <p><b>VRcade Suite (Senior Project)</b> -
        <a href="https://github.com/LuisRamirezTorres/CS425-Senior-Project"> GitHub Repository</a></p>
    <ul className="list-className-type:disc;">
        <li>A suite of arcade games implemented in Unity using the Leap Motion Controller 2 and Ultraleap’s API</li>
        <li>Takes hand gestures as input to control and navigate a suite of games, showcasing the Leap Motion’s real time detection
            of hand gestures, object and UI interaction, and minute details such as pinch or grab strength</li>
    </ul>
    <p><b>Recipe Manager</b> -
        <a href="https://github.com/AustinMH0/CS333-Final-Project"> GitHub Repository</a></p>
    <ul className="list-className-type:disc;">
        <li>An object-oriented python program designed to showcase Unit Testing, Integration Testing, and automatic testing,
            building and deployment of an application</li>
        <li>Uses Coverage.py for running the tests</li>
        <li>Uses GitHub Actions to automate the testing, building, and deployment of the application</li>
        <li>Uses GitHub Actions to build and push an image of the application to a Docker repository</li>
    </ul>
    <h3 className = "sub-headers">Additional</h3>
    <hr />
    <p><b>Technical Skills:</b> C++, Java, Python, C#, Unity, Git and GitHub, GitHub Actions, Docker, Linux</p>

  </React.StrictMode>,
);