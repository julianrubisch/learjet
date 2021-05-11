import { controller, attr } from '@github/catalyst';
import { install } from '@github/hotkey';
import { html, render, unsafeHTML } from '@github/jtml';

import baseConfig from '../../learjet.config.js';

@controller
class HotkeyNavElement extends HTMLElement {
  @attr items = JSON.stringify(baseConfig.items);

  connectedCallback() {
    this.update();

    for (const el of this.querySelectorAll('[data-hotkey]')) {
      install(el);
    }
  }

  update() {
    const navItem = ({ title, hotkey, content, dark }) => {
      console.log(!!dark);
      return html`
        <hotkey-nav-item
          class="menu-item f3-light"
          data-title="${title}"
          data-hotkey="${hotkey}"
          data-content="${JSON.stringify(content)}"
        />
      `;
    };

    const nav = items =>
      html`
        <nav class="menu color-shadow-medium" aria-label="Main Menu">
          ${items.map(item => navItem(item))}
        </nav>
      `;
    render(nav(JSON.parse(this.items)), this);
  }
}

export default HotkeyNavElement;
