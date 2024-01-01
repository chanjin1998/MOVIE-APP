import { Component } from "../core/heropy";
// MovieItem이 생성자 함수로 호출되는 자리에서 props라는 객체 데이터로
// 영화 정보를 받아온다. 그 영화 정보를 상속하는 컴포넌트 클래스로
// 넣어줬기 때문에 heropy.js에 만든 컴포넌트 구조에 맞게 this.props
// 부분에서 해당하는 정보를 쓸 수가 있다. 이 내용을 객체 구조분해 할당으로 꺼내쓴다.
// MovieItem을 생성자 함수로
export default class MovieItem extends Component {
  constructor(props) {
    super({
      props,
      tagName: "a",
    });
  }
  render() {
    const { movie } = this.props;

    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`);
    this.el.classList.add("movie");
    this.el.style.backgroundImage = `url(${movie.Poster})`;
    this.el.innerHTML = /*html*/ `
      <div class='info'>
        <div class='year'>${movie.Year}</div>
        <div class='title'>${movie.Title}</div>
      </div>
    `;
  }
}
