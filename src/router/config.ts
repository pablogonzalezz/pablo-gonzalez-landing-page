const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/blog/:filename"],
    exact: true,
    component: "Blog",
  },
];

export default routes;
