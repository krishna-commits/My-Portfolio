import { Head, Main, NextScript } from "next/document";

export default function Document() {
  const googleTag = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-KNH33H1VPP');`;
            const clarity = `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "jyzxip5knt");`

            return (
              <html lang="en" suppressHydrationWarning>

      <Head />
      <body>
        <Main />
        <NextScript />
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-KNH33H1VPP"></script>
        <script async dangerouslySetInnerHTML={{ __html: googleTag }} />
        <script async dangerouslySetInnerHTML={{ __html: clarity }} />
      </body>
    </html>
  );
}
