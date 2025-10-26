import { useEffect, useState } from "react";

export const DaleCooper = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <div
        id="page-cover"
        className={`page page--dale-cooper sps ${isReady ? "sps--abv" : ""}`}
      >
        <h1>
          <span>Special Agent</span> Dale Cooper
        </h1>
        <h2>This is - excuse me - a damn fine cup of coffee</h2>

        <button className="btn-scroll btn-scroll--down">
          <span className="sr-only">Scroll down</span>
        </button>
      </div>
      <div id="page-info" className="page-info page-info--dale-cooper sps">
        <h2>
          <i className="zigzag-long"></i>
          <span>Meet </span>Dale Cooper
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
                    src="/images/info-dale.jpg"
                    alt="Black Lodge: Dale Cooper"
                    className="bio-img"
                  />
                </span>
              </button>
            </div>

            <div className="col-md-6 text-col">
              <dl>
                <dt>Name:</dt>
                <dd>Dale Cooper</dd>
              </dl>

              <dl>
                <dt>From:</dt>
                <dd>Philadelphia, Pennsylvania</dd>
              </dl>

              <dl>
                <dt>Likes:</dt>
                <dd>Coffee, cherry pie, reasonably priced hotels</dd>
              </dl>

              <dl>
                <dt>Dislikes:</dt>
                <dd>Albert Rosenfield's treatment of Twin Peaks' citizens</dd>
              </dl>

              <dl>
                <dt>Bio:</dt>
                <dd>
                  Federal Bureau of Investigation Special Agent Dale Bartholomew
                  Cooper is an unconventional investigator who was assigned to
                  investigate the brutal murder of the popular high school
                  student, Laura Palmer in the town of Twin Peaks, Washington.
                  He ended up falling in love with the town and gained a great
                  deal of acceptance within the normally tight-knit community.
                  He displays an array of quirky mannerisms such as giving a
                  'thumbs up' when satisfied, quoting sage-like sayings, a
                  distinct sense of humor, and a passionate love for the Double
                  R's cherry pie and a "damn fine cup of coffee."{" "}
                  <a
                    href="http://twinpeaks.wikia.com/wiki/Dale_Cooper"
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

        <a
          href="http://www.sho.com/twin-peaks"
          target="_blank"
          className="btn-next"
        >
          <span>
            <strong>Visit:</strong> Official Twin Peaks
          </span>
        </a>
      </div>

      <div className="video-modal">
        <div className="video-modal-inner">
          <button className="btn-close-video video-open-close">
            <span className="sr-only">Close video</span>X
          </button>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/5CREjFZ4TmA?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
