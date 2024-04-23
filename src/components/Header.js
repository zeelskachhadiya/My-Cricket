const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black sticky-top">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="./image/Logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-label="Toggle navigation"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path
                stroke="rgba(255, 255, 255, 1)"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#hero-section">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white " aria-current="page" href="#courses">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#why_choose-section">
                Why Choose
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#training-groups">
                Groups
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" aria-current="page" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};

export default Header;
