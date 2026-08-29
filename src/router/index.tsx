import { lazy, Suspense } from "react";
import { BrowserRouter, Route, } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Spin } from "antd";
import useGetAllPosts from "../hooks/useGetAllPosts";

const Router = () => {
  const paths = useGetAllPosts()?.map((post) => ({ params: { id: post.id } }));

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
      <BrowserRouter>
        <Route
          path={["/", "/home"]}
          exact={true}
          component={lazy(() => import(`../pages/Home`))}
          key={"home"}
        />
        <Route
          path={"/blog/:filename/"}
          exact={true}
          component={lazy(() => import(`../pages/Blog`))}
          key={"blog"}
        />
        {paths?.map((path) => (
          <Route
            path={`/blog/${path}`}
            exact={true}
            component={lazy(() => import(`../pages/Blog`))}
            key={`/blog/${path.params.id}`}
          />
        )
        )}
      </BrowserRouter>
      <Footer />
    </Suspense>
  );
};

export default Router;
