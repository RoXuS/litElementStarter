import { LitElement, html, css } from 'lit-element';
import './my-component';

class MyApp extends LitElement {
  static get styles() {
    return css`
      p {
        background: red;
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <p>A paragraph</p>
      <my-component></my-component>
    `;
  }
}
customElements.define('my-app', MyApp);
