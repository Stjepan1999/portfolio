import './AboutPage.scss';
import htmlIcon from '../../assets/Images/html.png';
import cssIcon from '../../assets/Images/css.png';
import javascriptIcon from '../../assets/Images/javascript.png';
import reactIcon from '../../assets/Images/react.png';
import gitIcon from '../../assets/Images/git.png';
import npmIcon from '../../assets/Images/npm.png';
import webpackIcon from '../../assets/Images/webpack.png';
import sassIcon from '../../assets/Images/sass.png';
import jestIcon from '../../assets/Images/jest.png';
import apiIcon from '../../assets/Images/api.png';

export const AboutPage = () => {
  return (
    <div className="page">
      <div className="about-page">
        <div className="heading">
          <h4 className="text-primary-color">ABOUT ME</h4>
          <h1>Here's My Story</h1>
        </div>

        <p>
          Hey there, I'm Stjepan, a junior front-end developer based in Croatia. I absolutely love creating cool
          websites and apps.
        </p>
        <p>
          One of my superpowers? I'm a quick learner. That's part of why I fell in love with coding in the first place.
          It's practical, you know? I get to tackle real-world problems and let my creativity run wild.
        </p>
        <p>
          Coding isn't just a job for me, it's a way to express myself. And the best part? There's always something new
          to discover, which keeps me excited!
        </p>
        <p>
          When I'm not coding, you can find me hitting the gym, reading a good book, or strumming on my guitar. I'm
          always thirsty for knowledge and eager to dive into new experiences.
        </p>
        <hr className="horizontal-line" />
        <h1 className="text">
          SKILLS <span className="text-primary-color">& TOOLS</span>
        </h1>
        <div className="skills-icons-container">
          <SkillIcon src={htmlIcon} text="HTML" />
          <SkillIcon src={cssIcon} text="CSS" />
          <SkillIcon src={javascriptIcon} text="JavaScript" />
          <SkillIcon src={reactIcon} text="React.js" />
          <SkillIcon src={sassIcon} text="SASS" />
          <SkillIcon src={gitIcon} text="Git" />
          <SkillIcon src={webpackIcon} text="Webpack" />
          <SkillIcon src={npmIcon} text="npm" />
          <SkillIcon src={jestIcon} text="Jest" />
          <SkillIcon src={apiIcon} text="RESTful API" />
        </div>
      </div>
    </div>
  );
};

const SkillIcon = ({ src, text }) => {
  return (
    <div className="icon-container">
      <img src={src} alt={text} className="medium-icon" />
      <p>{text}</p>
    </div>
  );
};
