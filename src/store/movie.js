import { Store } from "../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax : 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  store.state.page = page //page 값 바뀌는 것 저장하기
  if (page === 1) {
    // store.state.page = 1;
    store.state.movies = [];
  }
  // 비동기로 동작하니까 await를 사용해서 fetch 함수를 서버로 갔다올 때 기다려야함
  // 동작 순서 : omdb 페이지로 검색 결과를 전송 -> json으로 받아서 콘솔에 출력
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
  );
  const { Search,totalResults } = await res.json();
  // 1페이지의 영화정보와 2페이지의 정보를 Search로 받아온다. 3,4, 계속 받아옴
  store.state.movies = [...store.state.movies, ...Search];
  store.state.pageMax = Math.ceil(Number(totalResults) / 10)
};
