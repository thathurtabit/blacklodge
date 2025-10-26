import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./shared/nav/nav";
import { CharacterMenu } from "./shared/character-menu/character-menu";
import { Home } from "./pages/home/home";
import { Bob } from "./pages/bob/bob";
import { ChesterDesmond } from "./pages/chester-desmond/chester-desmond";
import { DaleCooper } from "./pages/dale-cooper/dale-cooper";
import { LauraPalmer } from "./pages/laura-palmer/laura-palmer";
import { ManFromAnotherPlace } from "./pages/man-from-another-place/man-from-another-place";
import { Mike } from "./pages/mike/mike";
import { PhillipJeffries } from "./pages/phillip-jefferies/phillip-jeffries";
import { TheGiant } from "./pages/the-giant/the-giant";
import { Footer } from "./shared/footer/footer";

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    document.body.classList.add("page-ready");

    return () => {
      document.body.classList.remove("page-ready");
    };
  }, []);

  return (
    <>
      <main id="barba-wrapper" className="main-content" role="document">
        <Nav />
        <div
          className={`barba-container ${
            isReady ? "loaded loaded-links active" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bob" element={<Bob />} />
            <Route path="/chester-desmond" element={<ChesterDesmond />} />
            <Route path="/dale-cooper" element={<DaleCooper />} />
            <Route path="/laura-palmer" element={<LauraPalmer />} />
            <Route
              path="/man-from-another-place"
              element={<ManFromAnotherPlace />}
            />
            <Route path="/mike" element={<Mike />} />
            <Route path="/phillip-jeffries" element={<PhillipJeffries />} />
            <Route path="/the-giant" element={<TheGiant />} />
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>

          <CharacterMenu />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
