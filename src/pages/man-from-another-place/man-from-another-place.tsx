import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const ManFromAnotherPlace = () => {
  const { smoothScrollFromAnchor } = useSmoothScroll();
  const { sectionInFocus, setSectionInFocus } = useWaypoints();

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
          className={`page page--the-man sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>The Man from Another Place</h1>
          <h2>Let's rock!</h2>

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
          className={`page page-info--man sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <h2>
            <i className="zigzag-long"></i>
            <span>Meet</span>The Man from Another Place
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
                      src="/images/info-man.jpg"
                      alt="Black Lodge: The Man from Another Place"
                      className="bio-img"
                    />
                  </span>
                </button>
              </div>

              <div className="col-md-6 text-col">
                <dl>
                  <dt>Name:</dt>
                  <dd>The Man from Another Place</dd>
                </dl>

                <dl>
                  <dt>From:</dt>
                  <dd>An alternative plane of reality</dd>
                </dl>

                <dl>
                  <dt>Likes:</dt>
                  <dd>Red suits, talking backwards, dancing</dd>
                </dl>

                <dl>
                  <dt>Dislikes:</dt>
                  <dd>Having his garmonbozia stolen</dd>
                </dl>

                <dl>
                  <dt>Bio:</dt>
                  <dd>
                    The Man from Another Place appeared in a dream had by FBI
                    Special Agent Dale Cooper. He said "let's rock" and went to
                    a chair to tell Cooper that the gum he liked was going to
                    come back in style. He described the present Laura Palmer as
                    being his cousin and said she was full of secrets. He said
                    that where he was from, "the birds sing a pretty song and
                    there is always music in the air." He then stood up and
                    began dancing. Laura shared this very same dream days before
                    Cooper.{" "}
                    <a
                      href="http://twinpeaks.wikia.com/wiki/The_Man_from_Another_Place"
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

          <Link to="/the-giant" className="btn-next">
            <span>
              <strong>Meet:</strong> The Giant
            </span>
          </Link>
        </div>
      </Waypoint>

      <div className="video-modal">
        <div className="video-modal-inner">
          <button className="btn-close-video video-open-close">
            <span className="sr-only">Close video</span>X
          </button>

          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/xw9bpuJRoyU?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
