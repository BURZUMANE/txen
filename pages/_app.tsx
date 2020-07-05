import { Provider } from "react-redux";
import "react-notifications/lib/notifications.css";

import store from "../store";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
