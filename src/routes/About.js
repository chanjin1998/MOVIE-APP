import { Component } from "../core/heropy";
import aboutStore from "../store/about";

export default class About extends Component {
  render() {
    const { photo, name, email, blog, github } = aboutStore.state;
    this.el.classList.add("container", "about");
    this.el.innerHTML = /*html*/ `

    `;
  }
}
