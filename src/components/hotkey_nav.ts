import { controller, attr } from '@github/catalyst';
import { install } from '@github/hotkey';
import { html, render } from '@github/jtml';

import config from '../../learjet.config.js';

@controller
class HotkeyNavElement extends HTMLElement {
  connectedCallback() {
    this.update();

    for (const el of this.querySelectorAll('[data-hotkey]')) {
      install(el);
    }
  }

  update() {
    const navItem = ({ title, hotkey }) =>
      html`
        <a
          class="menu-item f3-light d-flex"
          href="#${hotkey}"
          data-hotkey="${hotkey}"
          ><span
            class="color-text-tertiary border rounded-3 col-1 mr-2 color-shadow-small text-center"
            >${hotkey.toUpperCase()}</span
          >${title}</a
        >
      `;

    const nav = () =>
      html`
        <nav
          id="entry_nav"
          class="menu color-shadow-medium"
          aria-label="Main Menu"
        >
          ${config.entry.map(item => navItem(item))}
        </nav>
      `;
    render(nav(this.config), this);
  }
}

export default HotkeyNavElement;
