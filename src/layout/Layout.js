import { Fragment } from "react";
import NextPrev from "../components/NextPrev";
import Stories from "../components/Stories";
import Header from "./Header";

const Layout = () => {
  return (
    <Fragment>
      <Header></Header>
      <h2 style={{ marginLeft: "2.2rem" }}>Latest News</h2>
      <Stories />
      <NextPrev />
    </Fragment>
  );
};

export default Layout;
