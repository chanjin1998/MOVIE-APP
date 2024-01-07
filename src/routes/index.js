import { createRouter } from "../core/heropy";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import NotFound from "./NotFound";

export default createRouter([
  { path: "#/", component: Home },
  { path: "#/movie", component: Movie },
  { path: "#/about", component: About },
  // 나머지 모든 페이지 에러 처리, 마지막에 적기
  { path: ".*", component: NotFound },
]);
