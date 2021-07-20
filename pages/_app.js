import "../styles/style.css";
import "../styles/bootstrap.min.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import * as gtag from "../lib/gtag";
import LayoutModule from "../layout/Layout";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <LayoutModule>
        <Component {...pageProps} />
      </LayoutModule>
    </>
  );
}

export default MyApp;
