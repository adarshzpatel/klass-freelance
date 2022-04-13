import { AppProps } from "next/app";
import "../styles/globals.css";
import { providers } from "ethers";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const provider = providers.getDefaultProvider();

function MyApp({ Component, pageProps }: AppProps) {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  return (
    <>
    <Toaster/>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id='analytics' strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
