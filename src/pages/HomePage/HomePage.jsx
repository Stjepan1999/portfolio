import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="page home-page">
      <div className="landing-section">
        <div>PHOTO</div>
        <h5 className="text-primary-color">Hey, I am</h5>
        <h1 className="landing-heading">Stjepan Franić</h1>
        <p className="text">A junior front-end developer from Croatia.</p>
        <button className="button button-primary">More About Me</button>
      </div>
    </div>
  );
};
