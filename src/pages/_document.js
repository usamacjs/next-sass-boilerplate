import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:500,800|Source+Sans+Pro:300,400&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/static/favicon-16x16.png" importance="low" />
          <link href="/static/favicon-16x16.png" rel="shortcut icon"></link>
          <link
            href="/static/apple-touch-icon.png"
            rel="apple-touch-icon"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="64x64"
            href="/static/favicon-64x64.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/favicon-192x192.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/favicon-512x512.png"
          ></link>
          <meta name="theme-color" content="#64B2E9"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
