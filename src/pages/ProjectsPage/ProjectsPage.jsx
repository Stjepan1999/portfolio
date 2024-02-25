import './ProjectsPage.scss';
import ecomImage from '../../assets/Images/ecom-project.png';

export const ProjectsPage = () => {
  return (
    <div className="page">
      <div className="project-page">
        <h1 className="text text-heading">
          My <span className="text-primary-color">Projects</span>
        </h1>
        <Project
          title="Ecommerce Website"
          stack="React.js, SCSS, React Router"
          description="A React web application that simulates an ecommerce website. It utilizes the Fake Store API to fetch product data and allows users to browse products, add items to their shopping cart, and view information about the store."
          img={ecomImage}
          liveLink="https://ecomwebsite-stjepan.netlify.app/"
          sourceLink="https://github.com/Stjepan1999/ecommerce-website"
        />
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
          <a className="button button-primary-transparent" href={liveLink} target="_blank">
            Live
          </a>
          <a className="button button-secondary-transparent" href={sourceLink} target="_blank">
            Source
          </a>
        </div>
      </div>
      <div>
        <img src={img} className="project-image" />
      </div>
    </div>
  );
};
