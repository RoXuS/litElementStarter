import { LitElement, html, css } from 'lit-element';

class MyComponentTwo extends LitElement {
  static get styles() {
    return css`
      p {
        background: green;
        margin: 0;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <p>A paragraph from my component two</p>
    `;
  }
}
customElements.define('my-component-two', MyComponentTwo);
