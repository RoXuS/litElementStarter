import { LitElement, html, css } from 'lit-element';

class MyComponent extends LitElement {
  static get styles() {
    return css`
      p {
        background: blue;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <p>A paragraph from my component</p>
    `;
  }
}
customElements.define('my-component', MyComponent);
