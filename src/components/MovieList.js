import { Component } from "../core/heropy";
import movieStore from "../store/movie";
import MovieItem from "./MovieItem";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
    movieStore.subscribe("loading", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /*html*/ `
      <div class='movies'></div>
      <div class="the-loader hide"></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl.append(
      //map() 배열데이터에서 사용, 앞의 배열데이터를 기준으로 callback 함수를 반복 실행, 반환 후 재배정
      ...movieStore.state.movies.map((movie) => {
        return new MovieItem({
          movie: movie,
        }).el;
      })
    );
    const loaderEl = this.el.querySelector(".the-loader");
    movieStore.state.loading
      ? loaderEl.classList.remove("hide")
      : loaderEl.classList.add("hide");
  }
}
