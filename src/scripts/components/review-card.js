class ReviewCard extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        font-family: Plus Jakarta Sans, sans-serif;
      }
      .w-custom{
        width: 420px;
      }
      .h-custom{
        height: 324px;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += ` 
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <div class="review-card w-custom h-custom border border-gray-400 rounded-3xl p-11">
        <div class="flex gap-3 items-center mb-5">
          <div class="w-10 h-10 rounded-full bg-slate-500 overflow-hidden">
            <slot name="profile-picture"></slot>
          </div>
          <p class="reviewer-name font-semibold"><slot name="reviewer-name"></p>
        </div>
        <p class="review-text text-gray-500"><slot name="review-text"></slot></p>
      </div>
    `;
  }
}

customElements.define('review-card', ReviewCard);
