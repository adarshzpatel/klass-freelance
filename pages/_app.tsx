import { AppProps } from "next/app";
import "../styles/globals.css";
import { providers } from "ethers";

const provider = providers.getDefaultProvider();

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
