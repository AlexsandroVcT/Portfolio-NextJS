import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-PT">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta name="title" content="Alexsandro | Portfolio Dev Project" />
          <meta
            name="description"
            content="Olá, eu sou um desenvolvedor de website apaixonado por criar soluções digitais inovadoras e acessíveis. Eu tenho experiência em HTML, CSS, JavaScript, ReactJS e Next.js. Eu adoro aprender novas tecnologias e compartilhar meus conhecimentos com a comunidade."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Alexsandro | Portfolio Dev Project"
          />
          <meta
            property="og:description"
            content="Olá, eu sou um desenvolvedor de website apaixonado por criar soluções digitais inovadoras e acessíveis. Eu tenho experiência em HTML, CSS, JavaScript, ReactJS e Next.js. Eu adoro aprender novas tecnologias e compartilhar meus conhecimentos com a comunidade."
          />
          <meta
            property="og:image"
            content="https://www.4shared.com/s/fbS5O56tQjq"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="Alexsandro | Portfolio Dev Project"
          />
          <meta
            property="twitter:description"
            content="Olá, eu sou um desenvolvedor de website apaixonado por criar soluções digitais inovadoras e acessíveis. Eu tenho experiência em HTML, CSS, JavaScript, ReactJS e Next.js. Eu adoro aprender novas tecnologias e compartilhar meus conhecimentos com a comunidade."
          />
          <meta
            property="twitter:image"
            content="https://www.4shared.com/s/fbS5O56tQjq"
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
