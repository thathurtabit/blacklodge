import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const CharacterMenu = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  useEffect(() => {
    setIsReady(true);

    return () => {
      setIsReady(false);
    };
  }, []);

  return (
    <>
      <button
        className="characters-open-close btn-open-modal"
        onClick={() => setShowMenu(!showMenu)}
      >
        <span className="sr-only">View characters</span>
        <i className="btn-bar"></i>
      </button>

      <div className={`characters-modal ${showMenu ? "open" : ""}`}>
        <button
          className="characters-open-close btn-close-modal"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="sr-only">Close modal</span>X
        </button>
        <ul className="nav-overlay">
          <li className="nav-overlay-item nav-bob">
            <Link className="nav-overlay-link" to="/bob" title="Bob">
              <span>Bob</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-mike">
            <Link className="nav-overlay-link" to="/mike" title="Mike">
              <span>Mike</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-man">
            <Link
              className="nav-overlay-link"
              to="/man-from-another-place"
              title="Man from another place"
            >
              <span>Man from another place</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-giant">
            <Link
              className="nav-overlay-link"
              to="/the-giant"
              title="The Giant"
            >
              <span>The Giant</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-laura">
            <Link
              className="nav-overlay-link"
              to="/laura-palmer"
              title="Laura Palmer"
            >
              <span>Laura Palmer</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-chester">
            <Link
              className="nav-overlay-link"
              to="/chester-desmond"
              title="Chester Desmond"
            >
              <span>Chester Desmond</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-phillip">
            <Link
              className="nav-overlay-link"
              to="/phillip-jeffries"
              title="Phillip Jeffries"
            >
              <span>Phillip Jeffries</span>
            </Link>
          </li>
          <li className="nav-overlay-item nav-dale">
            <Link
              className="nav-overlay-link"
              to="/dale-cooper"
              title="Dale Cooper"
            >
              <span>Dale Cooper</span>
            </Link>
          </li>
        </ul>
      </div>

      {!isReady ? (
        <div id="loading-cover">
          <svg className="circle-bg" viewBox="0 0 200 200">
            <circle className="rotate" cx="100" cy="100" r="50"></circle>
          </svg>
        </div>
      ) : null}
    </>
  );
};
