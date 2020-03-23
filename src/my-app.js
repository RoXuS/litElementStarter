/* eslint import/extensions: off */
import { LitElement, html, css } from 'lit-element';
import page from 'page/page.mjs';
import './my-component';
import './my-component-two';
import './my-menu';

class MyApp extends LitElement {
  static get styles() {
    return css`
      p {
        background: red;
        margin: 0;
      }
    `;
  }

  displayPage() {
    switch (this.selectedPage) {
      case 'my-component':
        return html`<my-component></my-component>`;
      case 'my-component-two':
        return html`<my-component-two></my-component-two>`;
      default:
        return null;
    }
  }

  render() {
    return html`
      <my-menu></my-menu>
      ${this.displayPage()}
    `;
  }

  static get properties() {
    return {
      selectedPage: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.installRoutes();
  }

  installRoutes() {
    console.log('install rotues');
    page.base('');
    page('/', () => {
      console.log('home is loaded');
      this.selectedPage = 'my-component';
    });
    page('/my-component-two', () => {
      console.log('my component two is loaded');
      this.selectedPage = 'my-component-two';
    });
    page();
  }
}
customElements.define('my-app', MyApp);
