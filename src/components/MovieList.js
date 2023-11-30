import { Component } from "../core/heropy";
import movieStore from "../store/movie";

export default class MovieList extends Component {
  constructor() {
    super();
    movieStore.subscribe("movies", () => {
      this.render();
    });
  }
  render() {
    this.el.classList.add("movie-list");
    this.el.innerHTML = /*html*/ `
      <div class='movies'></div>
    `;

    const moviesEl = this.el.querySelector(".movies");
    moviesEl.append(
      //map() 배열데이터에서 사용, 앞의 배열데이터를 기준으로 callback 함수를 반복 실행, 반환 후 재배정
      movieStore.state.movies.map((movie) => {
        return movie.Title;
      })
    );
  }
}
