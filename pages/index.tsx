import Head from "next/head";
import { Home } from "@/components/home/Home";
import Script from 'next/script'

export default function home() {
  return (
    <>
      <Head>
        <title>Krishna | DevOps Engineer</title>
        <meta name="description" content="I am a Devops Engineer With 7 years Experienced " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/krishnalogo.ico" />
        <div className="container">
          <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'GA_MEASUREMENT_ID');
            `}
          </Script>
        </div>
      </Head>
      <Home />
    </>
  );
}

