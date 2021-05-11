import { controller, attr } from '@github/catalyst';
import { install } from '@github/hotkey';
import { html, render, unsafeHTML } from '@github/jtml';

@controller
class HotkeyNavItemElement extends HTMLElement {
  @attr title = '';
  @attr hotkey = '';
  @attr content = '{}';
  @attr dark = false;

  connectedCallback() {
    this.update();

    for (const el of this.querySelectorAll('[data-hotkey]')) {
      install(el);
    }
  }

  attributeChangedCallback() {
    this.update();
  }

  get itemInnerHtml() {
    return `
      <span
        class="color-text-tertiary border rounded-3 col-1 mr-2 color-shadow-small text-center"
        >${this.hotkey.toUpperCase()}</span
      >${this.title}
    `;
  }

  update() {
    let preparedHtml;
    let parsedContent = JSON.parse(this.content);

    switch (parsedContent.type) {
      case 'hotkey-nav':
        preparedHtml = `
        <details
          class="details-reset details-overlay ${
            this.dark ? 'details-overlay-dark' : ''
          }"
        >
          <summary
            class="d-flex"
            aria-haspopup="dialog"
            data-hotkey="${this.hotkey}"
            >${this.itemInnerHtml}</summary
          >
          <details-dialog
            class="Box--overlay d-flex flex-column anim-fade-in fast"
          >
            <hotkey-nav data-items='${JSON.stringify(parsedContent.items)}'/>
          </details-dialog></details
        >`;
        break;
      case 'outbound-link':
        preparedHtml = `<a href="${parsedContent.href}" class="Link--primary d-flex" data-hotkey="${this.hotkey}"
>${this.itemInnerHtml}</a>`;
        break;
      default:
        preparedHtml = `<div class="d-flex">${this.itemInnerHtml}</div>`;
    }

    render(
      html`
        ${unsafeHTML(preparedHtml)}
      `,
      this,
    );
  }
}

export default HotkeyNavItemElement;
