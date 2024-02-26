import './HomePage.scss';
import landingImage from '../../assets/Images/landing-image.png';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="page home-page">
      <div className="landing-section">
        <div>
          <img src={landingImage} className="landing-image" />
        </div>
        <h5 className="text-primary-color medium-text">Hey, I'm</h5>
        <h1 className="large-text">Stjepan Franić</h1>
        <p className="text">A junior front-end developer from Croatia.</p>
        <Link to="/about" className="button button-primary margin-top">
          More About Me
        </Link>
      </div>
    </div>
  );
};
