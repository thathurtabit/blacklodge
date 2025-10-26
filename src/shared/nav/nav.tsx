import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const navTooltipId = "nav-tooltip";

export const Nav = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

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
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span className="navbar-toggler-bar"></span>
      </button>
      <Link
        className="navbar-brand nav-link"
        to="/"
        data-tooltip-id={navTooltipId}
        data-tooltip-place="right"
        data-tooltip-content="Black Lodge"
      >
        <h1 className="sr-only">
          Black Lodge - "It will utterly annihilate your soul."
        </h1>
      </Link>

      <div
        className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
        id="navbarToggler"
      >
        <ul className="navbar-nav">
          <li className="nav-item nav-bob">
            <Link
              className="nav-link"
              to="/bob"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Bob"
            >
              <span className="hidden-md-up">Bob</span>
            </Link>
          </li>
          <li className="nav-item nav-mike">
            <Link
              className="nav-link"
              to="/mike"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Mike"
            >
              <span className="hidden-md-up">Mike</span>
            </Link>
          </li>
          <li className="nav-item nav-man">
            <Link
              className="nav-link"
              to="/man-from-another-place"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Man from another place"
            >
              <span className="hidden-md-up">Man from another place</span>
            </Link>
          </li>
          <li className="nav-item nav-giant">
            <Link
              className="nav-link"
              to="/the-giant"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="The Giant"
            >
              <span className="hidden-md-up">The Giant</span>
            </Link>
          </li>
          <li className="nav-item nav-laura">
            <Link
              className="nav-link"
              to="/laura-palmer"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Laura Palmer"
            >
              <span className="hidden-md-up">Laura Palmer</span>
            </Link>
          </li>
          <li className="nav-item nav-chester">
            <Link
              className="nav-link"
              to="/chester-desmond"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Chester Desmond"
            >
              <span className="hidden-md-up">Chester Desmond</span>
            </Link>
          </li>
          <li className="nav-item nav-phillip">
            <Link
              className="nav-link"
              to="/phillip-jeffries"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Phillip Jeffries"
            >
              <span className="hidden-md-up">Phillip Jeffries</span>
            </Link>
          </li>
          <li className="nav-item nav-dale">
            <Link
              className="nav-link"
              to="/dale-cooper"
              data-tooltip-id={navTooltipId}
              data-tooltip-place="right"
              data-tooltip-content="Dale Cooper"
            >
              <span className="hidden-md-up">Dale Cooper</span>
            </Link>
          </li>
        </ul>
      </div>
      <Tooltip id={navTooltipId} />
    </nav>
  );
};
