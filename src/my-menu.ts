import {
  LitElement, html, customElement, css,
} from 'lit-element';

@customElement('my-component')
export default class MyMenu extends LitElement {
  static get styles() {
    return css``;
  }

  render() {
    return html`
      <a href="/">Home</a>
      <a href="/my-component-two">MyComponentTwo</a>
    `;
  }
}
