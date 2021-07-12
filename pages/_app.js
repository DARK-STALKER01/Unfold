import "../styles/style.css";
import "../styles/bootstrap.min.css";

import { useEffect } from "react";

import LayoutModule from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // multitag ads
    (function (s, u, z, p) {
      (s.src = u), s.setAttribute("data-zone", z), p.appendChild(s);
    })(
      document.createElement("script"),
      "https://iclickcdn.com/tag.min.js",
      4370161,
      document.body || document.documentElement
    );

    // popunder ads
    (function (s, u, z, p) {
      (s.src = u), s.setAttribute("data-zone", z), p.appendChild(s);
    })(
      document.createElement("script"),
      "https://iclickcdn.com/tag.min.js",
      4370165,
      document.body || document.documentElement
    );
  }, []);

  return (
    <>
      <LayoutModule>
        <Component {...pageProps} />
      </LayoutModule>
    </>
  );
}

export default MyApp;
