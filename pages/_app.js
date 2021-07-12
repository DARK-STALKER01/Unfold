import "../styles/style.css";
import "../styles/bootstrap.min.css";

import LayoutModule from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <LayoutModule>
        <Component {...pageProps} />
      </LayoutModule>
    </>
  );
}

export default MyApp;
