import { LitElement, html, css } from 'lit-element';

class MyMenu extends LitElement {
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
customElements.define('my-menu', MyMenu);
