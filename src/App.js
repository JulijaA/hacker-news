import Layout from "./layout/Layout";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
library.add(fab, fas, faCheckSquare, faCoffee);
function App() {
  return (
    <Fragment>
      <Layout />
    </Fragment>
  );
}

export default App;
