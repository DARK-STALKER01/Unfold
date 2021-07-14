import Document, { Html, Head, Main, NextScript } from "next/document";

const GA_TRACKING_ID = import("../lib/gtag");

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            atOptions = {
              key: "079f1d312e13c2af71863dd86cf10f9f",
              format: "iframe",
              height: 90,
              width: 728,
              params: {},
            };
            document.write(
              "<scr" +
                'ipt type="text/javascript" src="http' +
                (location.protocol === "https:" ? "s" : "") +
                '://www.variouscreativeformats.com/079f1d312e13c2af71863dd86cf10f9f/invoke.js"></scr' +
                "ipt>"
            );`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
