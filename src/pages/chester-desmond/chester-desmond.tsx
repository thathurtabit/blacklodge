import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";

export const ChesterDesmond = () => {
  const [isReady, setIsReady] = useState(false);
  const { smoothScrollFromAnchor } = useSmoothScroll();

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <div
        id="page-cover"
        className={`page page--chester-desmond sps ${
          isReady ? "sps--abv" : ""
        }`}
      >
        <h1>
          <span>Special Agent</span> Chester Desmond
        </h1>
        <h2>Her face had a sour look on it</h2>

        <a
          href="#page-info"
          onClick={smoothScrollFromAnchor}
          className="btn-scroll btn-scroll--down"
        >
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
      <div id="page-info" className="page-info page-info--chester-desmond sps">
        <h2>
          <i className="zigzag-long"></i>
          <span>Meet Special Agent </span>Chester Desmond
        </h2>

        <div className="page-info-content bio container-fluid">
          <div className="row">
            <div className="col-md-3 offset-md-1 col-lg-2 offset-lg-2 text-col bio-img-col">
              <button
                className="img-info-link video-open-close"
                data-animation="false"
                data-toggle="tooltip"
                data-placement="right"
                title="View video"
              >
                <span>
                  <img
                    src="/images/info-chester.jpg"
                    alt="Black Lodge: Chester Desmond"
                    className="bio-img"
                  />
                </span>
              </button>
            </div>

            <div className="col-md-6 text-col">
              <dl>
                <dt>Name:</dt>
                <dd>Chester Desmond</dd>
              </dl>

              <dl>
                <dt>From:</dt>
                <dd>Fargo, North Dakota</dd>
              </dl>

              <dl>
                <dt>Likes:</dt>
                <dd>Coffee</dd>
              </dl>

              <dl>
                <dt>Dislikes:</dt>
                <dd>Rudeness, time wasters</dd>
              </dl>

              <dl>
                <dt>Bio:</dt>
                <dd>
                  Federal Bureau of Investigation Special Agent Chester "Chet"
                  Desmond was called out by Regional Bureau Chief Gordon Cole to
                  investigate the murder of a 17-year-old girl named Teresa
                  Banks, who was found wrapped in plastic. Special Agent Dale
                  Cooper investigated his disappearance and found Desmond's car
                  with the words "Let's rock" scrawled across the windshield.{" "}
                  <a
                    href="http://twinpeaks.wikia.com/wiki/Chester_Desmond"
                    title="Source"
                    target="_blank"
                    className="btn-info-ext"
                  >
                    Src
                  </a>
                </dd>
              </dl>
            </div>
          </div>

          <div className="svg-content-border-wrap">
            <svg className="svg-content-border">
              <rect width="100%" height="100%" />
            </svg>
          </div>
        </div>

        <a
          href="#page-cover"
          onClick={smoothScrollFromAnchor}
          className="btn-scroll btn-scroll--up"
        >
          <span className="sr-only">Scroll up</span>
        </a>

        <Link to="/phillip-jeffries" className="btn-next">
          <span>
            <strong>Meet:</strong> Phillip Jeffries
          </span>
        </Link>
      </div>

      <div className="video-modal">
        <div className="video-modal-inner">
          <button className="btn-close-video video-open-close">
            <span className="sr-only">Close video</span>X
          </button>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/sEl8hw7tdwg?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
