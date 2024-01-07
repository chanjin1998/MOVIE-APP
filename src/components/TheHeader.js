import { Component } from "../core/heropy";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/",
          },
          {
            name: "Movie",
            href: "#/movie",
          },
          {
            name: "About",
            href: "#/about",
          },
        ],
      },
    });
    // 브라우저의 상태 변화에 대응하여 페이지를 다시 렌더링하
    // 페이지의 상태가 변경될 때마다 render 함수가 호출되어
    // 해당 상태에 따른 화면 갱신이 이루어짐
    window.addEventListener("popstate", () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /*html*/ `
      <a 
      href="#/" 
      class="logo">
      <span>OMDbAPI</span>.COM</a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split("?")[0];
              const hash = location.hash.split("?")[0];
              const isActive = href === hash;
              return /*html*/ `
              <li>
                <a
                  class="${isActive ? "active" : ""}" 
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>
            `;
            })
            .join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://heropy.blog/css/images/logo.png" alt="User" />
      </a>
    `;
  }
}
