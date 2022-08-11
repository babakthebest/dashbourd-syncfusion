import "../styles/globals.css";
import { registerLicense } from "@syncfusion/ej2-base";
import { AppWrapper } from "../context/context";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jWn5dc3JQRmFeVEQ="
);

function MyApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
