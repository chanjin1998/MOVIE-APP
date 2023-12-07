import { Component } from "../core/heropy";
import movieStore, {searchMovies} from '../store/movie'

export default class Search extends Component {
  render() {
    this.el.classList.add("search");
    this.el.innerHTML = /*html*/ `
      <input placeholder = 'Enter the move title to search'/>
      <button class='btn btn-primary'>
        Search
      </button> 
    `;
    // search 컴포넌트에서 검색을 한 다음에 영화목록에 데이터를 가져오기만 하는것이 아니고
    // 그 데이터를 화면에 실제 보여지는 요소로 출력을 해야한다.
    // 그 화면의 출력은 Movielist를 새로 만들어야한다, 다른 컴포넌트에서 같은 개념을 취급해야하는 Store 필요

    const inputEl = this.el.querySelector("input");
    inputEl.addEventListener("input", () => {
      movieStore.state.searchText = inputEl.value
    });
    inputEl.addEventListener("keydown", (event) => {
      // Enter키를 누르고 검색내용이 있는 경우에만 작동
      // trim의 기능 => 값이 존재하는 경우에만 엔터 작동
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    });
    const btnEl = this.el.querySelector(".btn");
    btnEl.addEventListener("click", () => {
      if (event.key === "Enter" && movieStore.state.searchText.trim()) {
        searchMovies(1)
      }
    }); 
  }
}