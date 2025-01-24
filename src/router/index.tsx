import { lazy, Suspense } from "react";
import { Route, HashRouter} from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Spin } from "antd";

const Router = () => {
  return (
    <Suspense
      fallback={
        <Spin
          spinning={true}
          tip={"loading..."}
          size="large"
          style={{ position: "absolute", top: "50%", left: "50%" }}
        ></Spin>
      }
    >
      <Header />
      <HashRouter>
        <Route
          path={["/", "/home"]}
          exact={true}
          component={lazy(() => import(`../pages/Home`))}
        />
        <Route
          path={"/blog/:filename/"}
          exact={true}
          component={lazy(() => import(`../pages/Blog`))}
        />
      </HashRouter>
      <Footer />
    </Suspense>
  );
};

export default Router;
