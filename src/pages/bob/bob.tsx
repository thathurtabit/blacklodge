import { Link } from "react-router-dom";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { useVideoModal } from "../../hooks/use-video-modal";

export const Bob = () => {
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
          className={`page page--bob sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Bob</h1>
          <h2>I'll catch you with my death bag</h2>

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
          className={`page-info page-info--bob sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <h2>
            <i className="zigzag-long"></i>
            <span>Meet</span>Bob
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
                      src="/images/info-bob.jpg"
                      alt="Black Lodge: Bob"
                      className="bio-img"
                    />
                  </span>
                </button>
              </div>

              <div className="col-md-6 text-col">
                <dl>
                  <dt>Name:</dt>
                  <dd>Bob (aka Killer Bob)</dd>
                </dl>

                <dl>
                  <dt>From:</dt>
                  <dd>An alternative plane of reality</dd>
                </dl>

                <dl>
                  <dt>Likes:</dt>
                  <dd>Murder, fire, garmonbozia, denim</dd>
                </dl>

                <dl>
                  <dt>Dislikes:</dt>
                  <dd>Getting caught</dd>
                </dl>

                <dl>
                  <dt>Bio:</dt>
                  <dd>
                    Bob is an entity from the Black Lodge, a realm of pure evil
                    which exists on an alternate plane of reality. He spends
                    most of his time on Earth possessing human beings, although
                    he also travels in the form of an owl. While possessing
                    humans, he commits horrible acts to elicit pain, fear, and
                    suffering from those around him; these feelings, which Black
                    Lodge residents refer to collectively as "garmonbozia", act
                    as a form of nourishment.{" "}
                    <a
                      href="http://twinpeaks.wikia.com/wiki/BOB"
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

          <Link to="/mike" className="btn-next">
            <span>
              <strong>Meet:</strong> Mike
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
              src="https://www.youtube.com/embed/c5WC0TW_0qc?controls=1&showinfo=0&rel=0"
              title="YouTube video player"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
