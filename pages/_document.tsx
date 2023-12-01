import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const hotjar = `
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-KNH33H1VPP"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-KNH33H1VPP');
</script>
  `;
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script defer src={hotjar} />
      </body>
    </Html>
  );
}
