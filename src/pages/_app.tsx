import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import "~/styles/navbar.css";
import "~/styles/style.css";
import Navbar from "../components/organisms/navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
