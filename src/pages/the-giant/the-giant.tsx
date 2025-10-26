import { Waypoint } from "react-waypoint";
import { useWaypoints } from "../../hooks/use-waypoints";
import { useSmoothScroll } from "../../hooks/use-smooth-scroll";
import { WAYPOINTS_OFFSET } from "../../settings/settings";
import { Link } from "react-router-dom";

export const TheGiant = () => {
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
          className={`page page--the-giant sps ${
            sectionInFocus === "page-cover" ? "sps--abv" : ""
          }`}
        >
          <h1>The Giant</h1>
          <h2>It is happening... again</h2>

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
          className={`page page-info--the-giant sps ${
            sectionInFocus === "page-info" ? "sps--blw" : ""
          }`}
        >
          <h2>
            <i className="zigzag-long"></i>
            <span>Meet</span>The Giant
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
                      src="/images/info-giant.jpg"
                      alt="Black Lodge: The Giant"
                      className="bio-img"
                    />
                  </span>
                </button>
              </div>

              <div className="col-md-6 text-col">
                <dl>
                  <dt>Name:</dt>
                  <dd>The Giant</dd>
                </dl>

                <dl>
                  <dt>From:</dt>
                  <dd>An alternative plane of reality</dd>
                </dl>

                <dl>
                  <dt>Likes:</dt>
                  <dd>Warm milk, bow ties</dd>
                </dl>

                <dl>
                  <dt>Dislikes:</dt>
                  <dd>Forgetting things</dd>
                </dl>

                <dl>
                  <dt>Bio:</dt>
                  <dd>
                    In March 1989, the Giant appeared at the Great Northern
                    Hotel in FBI Special Agent Dale Cooper's room to tell him
                    three things that he said would come true: "there's a man in
                    a smiling bag," "the owls are not what they seem," and
                    "without chemicals, he points." He then took Cooper's ring
                    and said he would give it back when these things came true.
                    He also said "Leo locked inside hungry horse" and that there
                    was a clue at Leo's home. After telling the special agent he
                    would require medical attention for his gunshot wound, he
                    disappeared.{" "}
                    <a
                      href="http://twinpeaks.wikia.com/wiki/The_Giant"
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

          <Link to="/laura-palmer" className="btn-next">
            <span>
              <strong>Meet:</strong> Laura Palmer
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
              src="https://www.youtube.com/embed/pWa0dZMHYeE?controls=1&showinfo=0&rel=0"
              className="embed-responsive-item"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
