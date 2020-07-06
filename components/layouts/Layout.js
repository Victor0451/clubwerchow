import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar";

const Layout = (props) => {
  const [tlJsHost, guardartlJsHost] = useState(null);

  useEffect(() => {
    if (window.location.protocol === "https:") {
      guardartlJsHost("https://secure.trust-provider.com/");
    } else if (window.location.protocol === "http:") {
      console.log("hshs");
      guardartlJsHost("http://www.trustlogo.com/");
    }
    console.log(window.location.protocol);
  }, []);

  console.log(`${tlJsHost}trustlogo/javascript/trustlogo.js`);
  return (
    <div className="">
      <Head>
        <meta charset="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/sandstone/bootstrap.min.css"
        ></link> */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-smnSwzHqW1zKbeuSMsAM/fMQpkk7HY11LuHiwT8snL/W2QBoZtVCT4H5x1CEcJCs"
          crossOrigin="anonymous"
        ></link>
        {/* <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        ></link>
        <script
          src={`${tlJsHost}trustlogo/javascript/trustlogo.js`}
          type={`'text/javascript' %3E%3C/script%3E"))`}
        />

        <title>Club Werchow</title>
      </Head>
      {/* <Navbar /> */}
      <main>{props.children}</main>
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      ></script>

      <script language="JavaScript" type="text/javascript">
        TrustLogo("https://micuenta.donweb.com/img/sectigo_positive_lg.png",
        "CL1", "none");
      </script>

      <footer className="center ">
        <p>Club Werchow &copy; 2020</p>
      </footer>
    </div>
  );
};
export default Layout;
