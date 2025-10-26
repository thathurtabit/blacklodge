import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const LauraPalmer = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <div
        id="page-cover"
        className={`page page--laura-palmer sps ${isReady ? "sps--abv" : ""}`}
      >
        <h1>Laura Palmer</h1>
        <h2>Sometimes my arms bend back</h2>

        <button className="btn-scroll btn-scroll--down">
          <span className="sr-only">Scroll down</span>
        </button>
      </div>
      <div id="page-info" className="page-info page-info--laura-palmer sps">
        <h2>
          <i className="zigzag-long"></i>
          <span>Meet</span>Laura Palmer
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
                    src="/images/info-laura.jpg"
                    alt="Black Lodge: Laura Palmer"
                    className="bio-img"
                  />
                </span>
              </button>
            </div>

            <div className="col-md-6 text-col">
              <dl>
                <dt>Name:</dt>
                <dd>Laura Palmer</dd>
              </dl>

              <dl>
                <dt>From:</dt>
                <dd>Twin Peaks, Washington</dd>
              </dl>

              <dl>
                <dt>Likes:</dt>
                <dd>Sex, boys, drugs, ponies</dd>
              </dl>

              <dl>
                <dt>Dislikes:</dt>
                <dd>Bob</dd>
              </dl>

              <dl>
                <dt>Bio:</dt>
                <dd>
                  Laura Palmer was a high school student whose death shook the
                  town of Twin Peaks, Washington and sparked an investigation
                  led by FBI Special Agent Dale Cooper. She was Donna Hayward's
                  best friend and the girlfriend of Bobby Briggs. On February
                  24, 1989 she was found dead, wrapped in plastic.{" "}
                  <a
                    href="http://twinpeaks.wikia.com/wiki/Laura_Palmer"
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

        <button className="btn-scroll btn-scroll--up">
          <span className="sr-only">Scroll up</span>
        </button>

        <Link to="/chester-desmond" className="btn-next" goto-man>
          <span>
            <strong>Meet:</strong> Chester Desmond
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
              src="https://www.youtube.com/embed/BL57-9171pk?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
