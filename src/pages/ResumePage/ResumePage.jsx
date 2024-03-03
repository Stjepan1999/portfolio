import { Link } from 'react-router-dom';
import resumeImage from '../../assets/Images/resume.jpg';
import resumePDF from '../../assets/resume.pdf';
import './ResumePage.scss';

export const ResumePage = () => {
  return (
    <div className="page resume-page">
      <h1 className="text-primary-color">Resume</h1>
      <div className="image-container">
        <img src={resumeImage} type="application/pdf" className="resume-image" />
      </div>
      <a
        href={resumePDF}
        download="Stjepan_Franić_Resume"
        target="_blank"
        rel="noopener noreferrer"
        className="button button-primary"
      >
        Download
      </a>
    </div>
  );
};
