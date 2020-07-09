import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <div className="">
      <Head>
        {/* GOOGLE ANALYTICS */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-119906216-4"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                  
                    gtag('config', 'UA-119906216-4');
            `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-119906216-5"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-119906216-5');
            `,
          }}
        />
        {/* GOOGLE ANALYTICS */}

        <meta charSet="UTF-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/lux/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-smnSwzHqW1zKbeuSMsAM/fMQpkk7HY11LuHiwT8snL/W2QBoZtVCT4H5x1CEcJCs"
          crossOrigin="anonymous"
        ></link>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
        ></link>

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
      

      <footer className="center ">
        <p>Club Werchow &copy; 2020</p>
      </footer>
    </div>
  );
};
export default Layout;
