import { Store } from "../core/heropy";

const store = new Store({
  searchText: "",
  page: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  // 비동기로 동작하니까 await를 사용해서 fetch 함수를 서버로 갔다올 때 기다려야함
  // 동작 순서 : omdb 페이지로 검색 결과를 전송 -> json으로 받아서 콘솔에 출력
  const res = await fetch(
    `https://omdbapi.com?apikey=7035c60c&s=${store.state.searchText}&page=${page}`
  );
  const json = await res.json();
  console.log(json);
};
