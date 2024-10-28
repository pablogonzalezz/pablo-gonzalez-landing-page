import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
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
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
