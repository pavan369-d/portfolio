import React from 'react';

const About = () => {
  const skillsArray = [
    "HTML", "CSS", "JavaScript", "ReactJS", "MongoDB",
    "Frontend Development", "Backend Development",
    "Problem Solving", "Software Development Life Cycle"
  ];

  return (
    <div id='about' className='about-section'>
      <h2>About Myself</h2>
      <p className='about-me'>
        Hi, I'm Pavan! I graduated from Brindavan Institute of Technology and Science, Kurnool, 
        with a degree in Computer Science and Engineering in 2024. I have a strong passion for 
        building intuitive and visually appealing user interfaces using my frontend development skills.
      </p>

      <div className="hr"></div>

      <div className="skills">
        <h3>Skills</h3>
        <ul>
          {skillsArray.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="hr"></div>

      <div className="about-my-skills about-me">
        <p>
          I am a passionate Frontend Developer with expertise in React.js, JavaScript, and modern web technologies. 
          I have hands-on experience building dynamic, responsive, and scalable web applications while ensuring 
          performance optimization and accessibility.
        </p>
        <p>
          My skill set includes working with React Router, Redux Toolkit, Firebase authentication, and RESTful APIs. 
          Additionally, I am exploring backend technologies like Node.js, MongoDB, and Spring Boot to enhance my 
          full-stack capabilities.
        </p>
        <p>
          Beyond coding, I enjoy solving DSA problems, continuously learning new technologies, and staying updated 
          with industry trends. My goal is to contribute to innovative projects, collaborate with like-minded professionals, 
          and create meaningful digital experiences.
        </p>
      </div>
    </div>
  );
};

export default About;
