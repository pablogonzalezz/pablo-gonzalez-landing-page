import { ComponentType, lazy, LazyExoticComponent, Suspense } from "react";
import { Route, HashRouter } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Spin } from "antd";
import routes from "./config";

const pages: Record<string, LazyExoticComponent<ComponentType<any>>> = {
  Home: lazy(() => import("../pages/Home")),
  Blog: lazy(() => import("../pages/Blog")),
};

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
        {routes.map((route) => (
          <Route
            key={route.component}
            path={route.path}
            exact={route.exact}
            component={pages[route.component]}
          />
        ))}
      </HashRouter>
      <Footer />
    </Suspense>
  );
};

export default Router;
