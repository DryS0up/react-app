import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="fade-in">Welcome to My React App</h1>
      <p className="fade-in">
        This app demonstrates a data-fetching experience. Navigate through the sections to learn more.
      </p>
      <div className="sections-description">
        <div className="section">
          <h2>About</h2>
          <p>Learn more about me, my background, and the projects I've worked on.</p>
          <Link to="/about">
            <button className="nav-button">Go to About</button>
          </Link>
        </div>
        <div className="section">
          <h2>Data Fetch</h2>
          <p>Explore the data-fetching experience with animations and card-based layouts.</p>
          <Link to="/data">
            <button className="nav-button">Go to Data Fetch</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
