import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";
import { useVideoModal } from "../../hooks/use-video-modal";

export const PhillipJeffries = () => {
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
          className={`page page--phillip-jeffries sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>Phillip Jeffries</h1>
          <h2>Who do you think this is, there?</h2>

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
          className={`page page-info--phillip-jeffries sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <h2>
            <i className="zigzag-long"></i>
            <span>Meet </span>Phillip Jeffries
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
                      src="/images/info-phillip.jpg"
                      alt="Black Lodge: Phillip Jeffries"
                      className="bio-img"
                    />
                  </span>
                </button>
              </div>

              <div className="col-md-6 text-col">
                <dl>
                  <dt>Name:</dt>
                  <dd>Phillip Jeffries</dd>
                </dl>

                <dl>
                  <dt>From:</dt>
                  <dd>Philadelphia, Pennsylvania</dd>
                </dl>

                <dl>
                  <dt>Likes:</dt>
                  <dd>Colourful shirts</dd>
                </dl>

                <dl>
                  <dt>Dislikes:</dt>
                  <dd>Getting lost in alternative planes of reality</dd>
                </dl>

                <dl>
                  <dt>Bio:</dt>
                  <dd>
                    In 1987, Jeffries was in a hotel in Buenos Aires, Argentina,
                    when he suddenly disappeared after receiving a letter from a
                    young woman who may be "Miss Judy", passing a bellhop and
                    entering an elevator. On February 16 1989, Jeffries suddenly
                    appeared out of an elevator in the Philadelphia office of
                    the FBI wearing the same clothes. He hurried to the office
                    of his former superior, Regional Bureau Chief Gordon Cole
                    and started raving in a loud and disturbed manner, speaking
                    of an individual named Judy and referring at one stage to
                    Special Agent Dale Cooper and yelling "Who do you think this
                    is, there?"{" "}
                    <a
                      href="http://twinpeaks.wikia.com/wiki/Phillip_Jeffries"
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

          <Link to="/dale-cooper" className="btn-next">
            <span>
              <strong>Meet:</strong> Dale Cooper
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
              src="https://www.youtube.com/embed/glbj-VX3mYU?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
