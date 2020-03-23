import {
  LitElement, html, customElement, css,
} from 'lit-element';

@customElement('my-component')
export default class MyComponent extends LitElement {
  static get styles() {
    return css`
      p {
        background: blue;
        margin: 0;
        color: white;
      }
    `;
  }

  render() {
    return html`
      <p>A paragraph from my component</p>
    `;
  }
}
