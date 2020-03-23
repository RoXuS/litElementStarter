/* eslint import/extensions: off */
import {
  LitElement, html, customElement, css, property, TemplateResult,
} from 'lit-element';
import page from 'page/page.mjs';
import './my-component';
import './my-component-two';
import './my-menu';

@customElement('my-app')
export default class MyApp extends LitElement {
  @property({ type: String }) selectedPage = 'my-component';

  static get styles() {
    return css`
      p {
        background: red;
        margin: 0;
      }
    `;
  }

  displayPage(): TemplateResult {
    switch (this.selectedPage) {
      case 'my-component':
        return html`<my-component></my-component>`;
      case 'my-component-two':
        return html`<my-component-two></my-component-two>`;
      default:
        return html``;
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

  installRoutes(): void {
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
