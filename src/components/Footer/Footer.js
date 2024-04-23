import {} from "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="./image/Logo.png" alt="" />
            <div className="menu">
              <ul className="d-md-flex">
                <li>Home</li>
                <li>Courses</li>
                <li>Why Choose</li>
                <li>Groups</li>
                <li>Testimonial</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <p>Get the freshest news from us</p>
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  width="48"
                />
                <button class="btn btn-primary" type="submit">
                Subscribe
                </button>
              </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
