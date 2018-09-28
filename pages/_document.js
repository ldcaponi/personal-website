import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,300,400"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Oswald:300"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
