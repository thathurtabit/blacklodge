import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";

export const Mike = () => {
  const [isReady, setIsReady] = useState(false);
  const { smoothScrollFromAnchor } = useSmoothScroll();

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <div
        id="page-cover"
        className={`page page--mike sps ${isReady ? "sps--abv" : ""}`}
      >
        <h1>Mike</h1>
        <h2>Fire... walk with me</h2>

        <a
          href="#page-info"
          onClick={smoothScrollFromAnchor}
          className="btn-scroll btn-scroll--down"
        >
          <span className="sr-only">Scroll down</span>
        </a>
      </div>
      <div id="page-info" className="page-info page-info--mike sps">
        <h2>
          <i className="zigzag-long"></i>
          <span>Meet</span>Mike
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
                    src="/images/info-mike.jpg"
                    alt="Black Lodge: Mike"
                    className="bio-img"
                  />
                </span>
              </button>
            </div>

            <div className="col-md-6 text-col">
              <dl>
                <dt>Name:</dt>
                <dd>Mike</dd>
              </dl>

              <dl>
                <dt>From:</dt>
                <dd>An alternative plane of reality</dd>
              </dl>

              <dl>
                <dt>Likes:</dt>
                <dd>Shoes, Religion, Stopping Bob</dd>
              </dl>

              <dl>
                <dt>Dislikes:</dt>
                <dd>Tattoos, Left Arms</dd>
              </dl>

              <dl>
                <dt>Bio:</dt>
                <dd>
                  MIKE is a spirit who can inhabit a human host, similar to BOB,
                  who was his partner in serial murder. After committing several
                  rape/murders with BOB, MIKE claims to have had a religious
                  epiphany and repented, cutting off his own arm to rid himself
                  of a "FIRE WALK WITH ME" tattoo, which symbolized being
                  touched by "the devilish one". BOB, however, would not repent.
                  MIKE has spent years trying to find and stop BOB. He currently
                  inhabits shoe salesman Philip Michael Gerard.{" "}
                  <a
                    href="http://twinpeaks.wikia.com/wiki/MIKE"
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

        <Link to="/man-from-another-place" className="btn-next">
          <span>
            <strong>Meet:</strong> The Man from Another Place
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
              src="https://www.youtube.com/embed/kIzimmrDtTg?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
