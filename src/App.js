import { useEffect, useRef } from "react";
import { TweenMax } from "gsap";
import "./App.css";
import Landing from "./pages/Landing";

function App() {
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
  }, []);
  return (
    <div className="App" ref={(el) => (app = el)}>
      <Landing />
    </div>
  );
}

export default App;
