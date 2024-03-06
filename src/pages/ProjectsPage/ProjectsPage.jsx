import './ProjectsPage.scss';
import ecomImage from '../../assets/Images/project-ecom.png';
import cvbuilderImage from '../../assets/Images/project-cvbuilder.png';
import weatherImage from '../../assets/Images/project-weather.png';
import todoImage from '../../assets/Images/project-todo.png';

export const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="project-page">
        <h1 className="text text-heading">
          My <span className="text-primary-color">Projects</span>
        </h1>
        <div className="projects-container">
          <Project
            title="Ecommerce Website"
            stack="React.js, SCSS, React Router"
            description="A React web application that simulates an ecommerce website. It utilizes the Fake Store API to fetch product data and allows users to browse products, add items to their shopping cart, and view information about the store."
            img={ecomImage}
            liveLink="https://ecomwebsite-stjepan.netlify.app/"
            sourceLink="https://github.com/Stjepan1999/ecommerce-website"
          />
          <Project
            title="CV Builder"
            stack="React.js"
            description="A React web application for creating resumes. Users can download their CV in a formatted PDF file. Users can add and edit sections such as personal info, contact info, education and experience section, and skills."
            img={cvbuilderImage}
            liveLink="https://jade-gumdrop-ae72b5.netlify.app/"
            sourceLink="https://github.com/Stjepan1999/cv-builder"
          />
          <Project
            title="Weather App"
            stack="HTML, CSS, JavaScript"
            description="A simple weather app built with JavaScript, HTML, CSS. It uses Visual Crossing API to get weather information, and provides current weather conditions, and 5 days forecast."
            img={weatherImage}
            liveLink="https://stjepan1999.github.io/weather-app/"
            sourceLink="https://github.com/Stjepan1999/weather-app"
          />
          <Project
            title="To-Do List"
            stack="HTML, CSS, JavaScript"
            description="To-Do List web application where users can organize tasks by creating custom projects. Data is saved to local storage."
            img={todoImage}
            liveLink="https://stjepan1999.github.io/todo-list/"
            sourceLink="https://github.com/Stjepan1999/todo-list"
          />
        </div>
        <a
          className="button  button-primary-transparent margin-bottom"
          href="https://github.com/Stjepan1999?tab=repositories"
          target="_blank"
        >
          See All
        </a>
      </div>
    </div>
  );
};

const Project = ({ title, stack, description, img, liveLink, sourceLink }) => {
  return (
    <div className="project">
      <div className="project-info">
        <h1>{title}</h1>
        <h4>
          <span className="text-primary-color">Tech Stack: </span>
          {stack}
        </h4>
        <p className="text-description"> {description}</p>
        <div className="buttons-container">
          <a className="button button-primary-transparent buttons-container" href={liveLink} target="_blank">
            Live
          </a>
          <a className="button button-secondary-transparent buttons-container" href={sourceLink} target="_blank">
            Source
          </a>
        </div>
      </div>
      <div className="project-image-container">
        <img src={img} className="project-image" />
      </div>
    </div>
  );
};
