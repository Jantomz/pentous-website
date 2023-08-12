import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import Navbar from "../components/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />;
    </div>
  );
};

export default MyApp;
