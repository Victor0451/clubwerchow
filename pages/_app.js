import App from "next/app";

import "../css/styles.css";
import "react-table/react-table.css";
import "react-confirm-alert/src/react-confirm-alert.css";

const MyApp = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default MyApp;
