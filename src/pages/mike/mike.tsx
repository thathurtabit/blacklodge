import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";
import { useVideoModal } from "../../hooks/use-video-modal";

export const Mike = () => {
  const { smoothScrollFromAnchor } = useSmoothScroll();
  const { sectionInFocus, setSectionInFocus } = useWaypoints();
  const { isVideoModalOpen, openVideoModal, closeVideoModal } = useVideoModal();

  return (
    <>
      <Waypoint
        onEnter={() => {
          setSectionInFocus("page-cover");
        }}
        topOffset={WAYPOINTS_OFFSET}
        bottomOffset={WAYPOINTS_OFFSET}
      >
        <div
          id="page-cover"
          className={`page page--mike sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
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
      </Waypoint>
      <Waypoint
        onEnter={() => {
          setSectionInFocus("page-info");
        }}
        topOffset={WAYPOINTS_OFFSET}
        bottomOffset={WAYPOINTS_OFFSET}
      >
        <div
          id="page-info"
          className={`page page-info--mike sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
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
                  onClick={openVideoModal}
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
                    MIKE is a spirit who can inhabit a human host, similar to
                    BOB, who was his partner in serial murder. After committing
                    several rape/murders with BOB, MIKE claims to have had a
                    religious epiphany and repented, cutting off his own arm to
                    rid himself of a "FIRE WALK WITH ME" tattoo, which
                    symbolized being touched by "the devilish one". BOB,
                    however, would not repent. MIKE has spent years trying to
                    find and stop BOB. He currently inhabits shoe salesman
                    Philip Michael Gerard.{" "}
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
      </Waypoint>

      <div className={`video-modal ${isVideoModalOpen ? "open" : ""}`}>
        <div className="video-modal-inner">
          <button
            className="btn-close-video video-open-close"
            onClick={closeVideoModal}
          >
            <span className="sr-only">Close video</span>X
          </button>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/fINzQdg1R48?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
