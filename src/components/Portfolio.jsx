import widgetImage from '/public/widgets.png';
import polyoneImage from '/public/polyoneImage.png'

import notesApp from '/public/notesImage.png'
import workoutApp from '/public/workoutAppImage.png'
const projects = [
  {
    title: "PolyOne Static",
    link: "https://polyonecln.netlify.app/",
    description: `Designed and developed a visually appealing static website with a responsive user interface for an enhanced browsing experience.`,
    techStack: "HTML, CSS, JavaScript"
  },
  {
    title: "Widget UI",
    link: "https://sample0.netlify.app/",
    description: `Developed a sleek and interactive widget UI using HTML and CSS, ensuring a visually appealing and responsive design for seamless user interaction.`,
    techStack: "HTML, CSS"
  },
  {
    title: "Notes App",
    link: "https://notesappwebspeechapi.netlify.app/",
    description: `Developed a full-stack Notes App with voice-to-text functionality using Web Speech API. Users can create, search, and organize notes effortlessly. Includes a favorite notes feature for quick access to important notes.`,
    techStack: "HTML, CSS, JavaScript, Web Speech API, Node.js, Express, MongoDB"
  },
  {
    title: "Workout App",
    link: "https://super-panda-80ebea.netlify.app/",
    description: `Built a full-stack Workout App that allows users to track and manage workout routines. Features include user authentication, exercise logging, and a structured workout plan. The backend ensures data persistence and smooth user experience.`,
    techStack: "React.js, Node.js, Express.js, MongoDB"
  }
];


const projectImage = [polyoneImage,widgetImage,notesApp,workoutApp];


const Portfolio = () => {
  return (
    <div className='projects-section' id='portfolio'>
      <div className="project-left-section">
       
        {projectImage.length>0 && projectImage.map((item,index)=><img src={item} alt="projectsnaps" key={index}/>)}
      </div>
      
      <div className="project-right-section projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h3>
            <p>{project.description}</p>
            <h4>Tech Stack:</h4>
            <span>{project.techStack}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
