import {Link} from 'react-router-dom';
import { SCREENS } from '../../navigation/constants';

const Navabr = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
      <a href="index.html" className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5">
        <h2 className="mb-2 text-white">Logistica</h2>
      </a>
      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to={SCREENS.HOME} className="nav-item nav-link active">Home</Link>
          <Link to={SCREENS.ABOUT} className="nav-item nav-link">About</Link>
          <Link to={SCREENS.SERVICES} className="nav-item nav-link">Services</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Info</a>
            <div className="dropdown-menu fade-up m-0">
              <Link to={SCREENS.PRICING} className="dropdown-item">Pricing Plan</Link>
              <Link to={SCREENS.FEATURES} className="dropdown-item">Features</Link>
              <Link to={SCREENS.QUOTE} className="dropdown-item">Free Quote</Link>
              <Link to={SCREENS.TEAM} className="dropdown-item">Our Team</Link>
              <Link to={SCREENS.TESTIMONIAL} className="dropdown-item">Testimonial</Link>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <Link to={SCREENS.CONTACT} className="nav-item nav-link">Contact</Link>
        </div>
        <h4 className="m-0 pe-lg-5 d-none d-lg-block"><i className="fa fa-headphones text-primary me-3"></i>+012 345 6789</h4>
      </div>
    </nav>
  )
}

export default Navabr;