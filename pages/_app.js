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

    // popads.net
    (function () {
      var fa697728aea033bfab562ff9318129b8 =
        "ETfpz9wAvLTsx3KdQOP-9RkqF8lketziu07TRyK6FMThXfoMzC1BK5pSAoDw0ndNNtRphg9mMzUYBfA";
      var b = [
        "w4sUw5rChDXDvA==",
        "FBXDlBEowpzCr8KAwoseemvDpw==",
        "N8KRwrLCmMOhTA==",
        "w5bDjsO+woh3M8OlYcO0SMOl",
        "wplyw4Y+DRMPw4F9cS3DtQ==",
        "MMOnwrnDoSXCnjQ=",
        "O3DCpcKs",
        "ScKwGA==",
        "H1LCqygzL8Ofw55rUw==",
        "TMKYNsO/",
        "wrMiwqbDqW5twrkg",
        "w7/CnMKtw6EMw510woI=",
        "TA8Yw7/Cq8Kvwqw=",
        "C3U1bsOm",
        "w7wpw4FRfiFVwrY=",
        "wp11w5sZFgM=",
        "wq9KRMOywpsI",
        "w6/Cj1MawrVnwrHDtMKGegk5w7Fz",
        "w6QKbSZwGn4hw4xSwpfCpw==",
        "w5rDmcOwRmzDgMOnKcKrwrTDmcORwqtxd8OORsO9w5V0J8KlwrnClsK/V1TDuMOcBD7CtsKiCsKfwq9qWw==",
        "wqHCrnlywpXDucK6w4V8HsO/wrHDrlpEVsKyQBhB",
        "S3/DosKGa2bDksOlwpjClhw5w7MCwoY=",
        "C8OTXcK8MA9KwpcqY8OpWcKe",
        "w7/ClsKiw7UYw7p/woLCvnbDm28=",
        "PsOnwrPDvS7CnCltFQ==",
        "XyzCtVXDnBjCm8KNDWctF8O+a8KjWMOpw7Now4zDhsObaHZ2QnPCuMKdPXxmUDXDr29qbhnCszIBCF8LPg==",
      ];
      (function (a, c) {
        var f = function (g) {
          while (--g) {
            a["push"](a["shift"]());
          }
        };
        f(++c);
      })(b, 0x150);
      var c = function (a, d) {
        a = a - 0x0;
        var e = b[a];
        if (c["XRXoib"] === undefined) {
          (function () {
            var h = function () {
              var k;
              try {
                k = Function(
                  "return\x20(function()\x20" +
                    "{}.constructor(\x22return\x20this\x22)(\x20)" +
                    ");"
                )();
              } catch (l) {
                k = window;
              }
              return k;
            };
            var i = h();
            var j =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            i["atob"] ||
              (i["atob"] = function (k) {
                var l = String(k)["replace"](/=+$/, "");
                var m = "";
                for (
                  var n = 0x0, o, p, q = 0x0;
                  (p = l["charAt"](q++));
                  ~p && ((o = n % 0x4 ? o * 0x40 + p : p), n++ % 0x4)
                    ? (m += String["fromCharCode"](
                        0xff & (o >> ((-0x2 * n) & 0x6))
                      ))
                    : 0x0
                ) {
                  p = j["indexOf"](p);
                }
                return m;
              });
          })();
          var g = function (h, l) {
            var m = [],
              n = 0x0,
              o,
              p = "",
              q = "";
            h = atob(h);
            for (var t = 0x0, u = h["length"]; t < u; t++) {
              q +=
                "%" +
                ("00" + h["charCodeAt"](t)["toString"](0x10))["slice"](-0x2);
            }
            h = decodeURIComponent(q);
            var r;
            for (r = 0x0; r < 0x100; r++) {
              m[r] = r;
            }
            for (r = 0x0; r < 0x100; r++) {
              n = (n + m[r] + l["charCodeAt"](r % l["length"])) % 0x100;
              o = m[r];
              m[r] = m[n];
              m[n] = o;
            }
            r = 0x0;
            n = 0x0;
            for (var v = 0x0; v < h["length"]; v++) {
              r = (r + 0x1) % 0x100;
              n = (n + m[r]) % 0x100;
              o = m[r];
              m[r] = m[n];
              m[n] = o;
              p += String["fromCharCode"](
                h["charCodeAt"](v) ^ m[(m[r] + m[n]) % 0x100]
              );
            }
            return p;
          };
          c["DPOjBW"] = g;
          c["CdWpnq"] = {};
          c["XRXoib"] = !![];
        }
        var f = c["CdWpnq"][a];
        if (f === undefined) {
          if (c["pUumnU"] === undefined) {
            c["pUumnU"] = !![];
          }
          e = c["DPOjBW"](e, d);
          c["CdWpnq"][a] = e;
        } else {
          e = f;
        }
        return e;
      };
      var i = window;
      i[c("0x8", "3qKK")] = [
        [c("0x4", "cv&u"), 0x46c69d],
        [c("0x11", "^(i0"), 0x0],
        [c("0x13", "R6CC"), "0"],
        [c("0x19", "B4G!"), 0x0],
        [c("0xe", "Dzdy"), ![]],
        [c("0x3", "#)tB"), 0x0],
        [c("0x14", "I3wz"), !0x0],
      ];
      var n = [c("0x15", "LW47"), c("0x1", "&dFu")],
        y = 0x0,
        a,
        p = function () {
          if (!n[y]) return;
          a = i[c("0xd", "B4G!")][c("0x18", "rvO[")](c("0x2", "ZgM*"));
          a[c("0xb", "LW)U")] = c("0x17", "0&M]");
          a[c("0xf", "JdPd")] = !0x0;
          var d = i[c("0x10", "w0Q%")][c("0x16", "q]g(")](
            c("0x12", "9PpG")
          )[0x0];
          a[c("0x9", "j(D]")] = c("0xc", "QVjz") + n[y];
          a[c("0x5", "E8)p")] = c("0x0", "oans");
          a[c("0x7", "oans")] = function () {
            y++;
            p();
          };
          d[c("0xa", "]%50")][c("0x6", "^(i0")](a, d);
        };
      p();
    })();
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
