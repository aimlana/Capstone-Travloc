class AppNavbar extends HTMLElement {
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
      .bg-maastrichtBlue{
        --tw-bg-opacity: 1;
        background-color: rgb(14 31 52 / var(--tw-bg-opacity));
      }
      .bg-princetonOrange{
        --tw-bg-opacity: 1;
        background-color: rgb(249 123 34 / var(--tw-bg-opacity));
      }
      .font-grandHotel{
        font-family: Grand Hotel, cursive;
      }
      .px-custom{
        padding-left: 82px;
        padding-right: 82px;
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
      <header id="header" class="flex items-center fixed px-custom h-24 w-screen bg-maastrichtBlue z-50 top-0 transition ease-in duration-300">
        <div class="flex items-center justify-between w-full" id="nav-menu">
          <h1 class="text-4xl font-grandHotel text-white">Travloc</h1>
          <nav>
            <ul class="flex items-center justify-between gap-10 text-white">
              <li><a href="index.html">Beranda</a></li>
              <li><a href="destination.html">Destinasi</a></li>
              <li><a href="#">Usaha Lokal</a></li>
              <li><a href="#">Tentang Kami</a></li>
            </ul>
          </nav>
          <a href="#" id="register" class="bg-princetonOrange text-white font-semibold py-1.5 px-8 border-none rounded-lg">Daftar</a>
        </div>
      </header>
    `;
  }
}

customElements.define('app-navbar', AppNavbar);
