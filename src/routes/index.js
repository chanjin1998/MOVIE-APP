import { createRouter } from "../core/heropy";
import Home from "./Home"

export default createRouter([
  { path: "#/", component: Home },
  // { path: "#/about/", component: About },
]);
