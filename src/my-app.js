/* eslint import/extensions: off */
import { LitElement, html, css } from 'lit-element';
import page from 'page/page.mjs';
import { connect } from 'pwa-helpers/connect-mixin.js';
import app from './reducers/app.js';
import store from './store';
import { setUser } from './actions/app';
import './my-component';
import './my-component-two';
import './my-menu';

class MyApp extends connect(store)(LitElement) {
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

  firstUpdated() {
    // Set a user in redux
    const user = {
      first: 'Julien',
      last: 'Rousseau',
      email: 'julien.rss@gmail.com',
    };
    store.dispatch(setUser(user));
  }

  // Called each time state changed
  stateChanged(state) {
    this.user = state.app.user;
  }

  render() {
    return html`
      ${this.user ? `${this.user.last} ${this.user.first}` : null}
      <my-menu></my-menu>
      ${this.displayPage()}
    `;
  }

  static get properties() {
    return {
      selectedPage: {
        type: String,
      },
      user: {
        type: Object,
      },
    };
  }

  installReducer() {
    // Add app reducer
    store.addReducers({ app });
  }

  constructor() {
    super();
    this.installReducer();
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
