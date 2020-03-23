import {
  LitElement, html, customElement, css,
} from 'lit-element';

@customElement('my-component-two')

export default class MyComponentTwo extends LitElement {
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