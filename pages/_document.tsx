import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const googleTag = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-KNH33H1VPP');`;
            return (
              <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KNH33H1VPP"></script>
        <script async dangerouslySetInnerHTML={{ __html: googleTag }} />
      </body>
    </Html>
  );
}
