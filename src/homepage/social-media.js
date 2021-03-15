function SocialMediaLinks() {
  return (
    <>
      <div>
        <div className="icon-container">
          {" "}
          <a
            href="https://www.facebook.com/bram.brooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="icon-container">
        <a
          href="https://www.instagram.com/_brambrooks/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram-square"></i>
        </a>
      </div>
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/in/bram-brooks-2653051b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
    </>
  );
}

export default SocialMediaLinks;
