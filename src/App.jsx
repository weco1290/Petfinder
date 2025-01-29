import { useState, useEffect } from "react";

import "./App.css";

import Header from "./Header";
import Footer from "./Footer";
import MainArea from "./MainArea";
import About from "./About";
import Cats from "./Cats";

function App() {
  const [page, setPage] = useState(document.location.hash || "#/");

  useEffect(() => {
    function loadPage() {
      setPage(document.location.hash || "#/");
    }

    window.addEventListener("popstate", loadPage);

    return () => {
      window.removeEventListener("popstate", loadPage);
    };
  }, []);

  function gotoPage(e) {
    // e.preventDefault();
    window.history.pushState(null, "", e.target.hash);
    setPage(e.target.hash);
  }

  return (
    <div className="app">
      {/* <a className="skiplink" href="#main">
        Skip to content
      </a> */}
      <Header gotoPage={gotoPage} />
      <main id="main">
        {page === "#/" && <MainArea />}
        {page === "#/about" && <About />}
        {page === "#/cats" && <Cats />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
