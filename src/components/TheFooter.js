import {Component} from '../core/heropy'

export default class TheFooter extends Component{
  constructor() {
    super({
      tagName:'footer',
    })
  }
  render(){
    this.el.innerHTML = /*html*/ `
      <div>
        <a href="https://github.com/chanjin1998/MOVIE-APP">
          GitHub Repository
        </a>
      </div>
      <div>
        <a href="https://github.com/chanjin1998">
          ${new Date().getFullYear()}
          ChanJin
        </a>
      </div>
    `
  } 
}