import './Footer.scss';
import githubIcon from '../../assets/Icons/github.png';
import linkedinIcon from '../../assets/Icons/linkedin.png';
import mailIcon from '../../assets/Icons/mail.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons-container">
          <a href="https://github.com/Stjepan1999" target="_blank" className="round-icon-container">
            <img src={githubIcon} className="small-icon" />
          </a>
          <a href="mailto:stjepan.franic99@gmail.com" className="round-icon-container">
            <img src={mailIcon} className="small-icon" />
          </a>
          <a href="https://www.linkedin.com/in/stjepanfranic/" target="_blank" className="round-icon-container">
            <img src={linkedinIcon} className="small-icon" />
          </a>
        </div>
        <div className="text text-color-gray">© 2024 | Coded by Stjepan Franić</div>
      </div>
    </footer>
  );
};
