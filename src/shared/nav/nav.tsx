import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-toggleable-sm fixed-top navbar-light">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-bar"></span>
      </button>
      <Link
        className="navbar-brand nav-link"
        to="/"
        data-animation="false"
        data-toggle="tooltip"
        data-placement="right"
        title="Black Lodge"
      >
        <h1 className="sr-only">
          Black Lodge - "It will utterly annihilate your soul."
        </h1>
      </Link>

      <div className="collapse navbar-collapse" id="navbarToggler">
        <ul className="navbar-nav">
          <li className="nav-item nav-bob">
            <Link
              className="nav-link"
              to="/bob"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Bob"
            >
              <span className="hidden-md-up">Bob</span>
            </Link>
          </li>
          <li className="nav-item nav-mike">
            <Link
              className="nav-link"
              to="/mike"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Mike"
            >
              <span className="hidden-md-up">Mike</span>
            </Link>
          </li>
          <li className="nav-item nav-man">
            <Link
              className="nav-link"
              to="/man-from-another-place"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Man from another place"
            >
              <span className="hidden-md-up">Man from another place</span>
            </Link>
          </li>
          <li className="nav-item nav-giant">
            <Link
              className="nav-link"
              to="/the-giant"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="The Giant"
            >
              <span className="hidden-md-up">The Giant</span>
            </Link>
          </li>
          <li className="nav-item nav-laura">
            <Link
              className="nav-link"
              to="/laura-palmer"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Laura Palmer"
            >
              <span className="hidden-md-up">Laura Palmer</span>
            </Link>
          </li>
          <li className="nav-item nav-chester">
            <Link
              className="nav-link"
              to="/chester-desmond"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Chester Desmond"
            >
              <span className="hidden-md-up">Chester Desmond</span>
            </Link>
          </li>
          <li className="nav-item nav-phillip">
            <Link
              className="nav-link"
              to="/phillip-jefferies"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Phillip Jefferies"
            >
              <span className="hidden-md-up">Phillip Jefferies</span>
            </Link>
          </li>
          <li className="nav-item nav-dale">
            <Link
              className="nav-link"
              to="/dale-cooper"
              data-animation="false"
              data-toggle="tooltip"
              data-placement="right"
              title="Dale Cooper"
            >
              <span className="hidden-md-up">Dale Cooper</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
