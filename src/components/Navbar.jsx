import "./Navbar.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg custom-navbar fixed-top"
      data-aos="fade-down"
    >
      <div className="container">

        <a className="navbar-brand" href="#">
          <span>Asad</span> Rafeeq
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <div className="navbar-nav ms-auto">

            <a className="nav-link" href="#about">
              About
            </a>

            <a className="nav-link" href="#skills">
              Skills
            </a>

            <a className="nav-link" href="#projects">
              Projects
            </a>

            <a className="nav-link" href="#contact">
              Contact
            </a>

          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;