import React from "react";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/master.scss";
import "../styles/nprogress/nprogress.scss";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

export default MyApp;
