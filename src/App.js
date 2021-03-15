import "./styles/main.scss";
// import image from "../src/images/Fwd-image-2.JPG";
import image from "../src/images/homepage-background-gradient.jpg";
// import Social_Media from "./homepage/social-media";
import SocialMediaLinks from "../src/homepage/social-media";
import Hamburger from "../src/homepage/hamburger";

function App() {
  return (
    <div>
      <img src={image}></img>
      {/* header */}

      <header>
        <div className="home-container">
          <div className="homeworld-icon">
            <i class="fas fa-globe"></i>
          </div>
          <p>&nbsp;Bram Brooks</p>
        </div>

        <nav>
          <a
            href="https://www.bbc.co.uk/sport/football"
            target="_blank"
            rel="noopener noreferrer"
          >
            about
          </a>

          <a
            href="https://www.bbc.co.uk/sport/football"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact
          </a>

          <a
            href="https://www.bbc.co.uk/sport/football"
            target="_blank"
            rel="noopener noreferrer"
          >
            extras
          </a>
        </nav>
        <div className="social-media-icons">
          {/* <div className="icon-container"> */}
          <SocialMediaLinks />
          {/* </div> */}
        </div>
        <div className="hamburger">
          <Hamburger />{" "}
        </div>
      </header>

      {/* main-content */}

      <div className="main-content">
        <div className="social-media-icons">
          <div className="icon-container">
            <SocialMediaLinks />
          </div>
        </div>
        {/* <p className="hello-world-hero">hello world</p> */}
        <p className="hello-world-hero">hello world</p>
        <p className="copyright">©Bram Brooks</p>
      </div>

      {/* footer */}

      <footer>
        {/* link 1 */}
        <a
          href="https://brambrooks-nc-news.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item"
        >
          <p>Portfolio Piece 1:</p>
          <p>Northcoders News</p>
        </a>

        {/* link 2 */}

        <a
          href="https://brambrooks-nc-news.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-item"
        >
          {" "}
          <p>Portfolio Piece 2:</p>
          <p>Photography</p>
        </a>

        {/* link 3 */}
        <div className="footer-item">
          <p>Portfolio Piece 3:</p>
          <p>Sound Engineer</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
