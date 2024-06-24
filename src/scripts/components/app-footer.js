class AppFooter extends HTMLElement {
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
      .text-princetonOrange{
        --tw-text-opacity: 1;
        color: rgb(249 123 34 / var(--tw-text-opacity));
      }
      .font-grandHotel{
        font-family: Grand Hotel, cursive;
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
      <footer class="bg-maastrichtBlue px-20 pb-10 pt-20 relative bottom-0 left-0 right-0 w-full">
        <div class="flex justify-between">
          <div>
          <h5 class="text-4xl text-white font-grandHotel">Travloc</h5>
          <p class="text-white mt-7">Temukan Keajaiban Wisata Lokal dan Dukung <br>UMKM di Seluruh Nusantara</p>
          <div class="social-media flex gap-6 mt-8">
            <a href="#"><i class="fa-brands fa-whatsapp text-white text-2xl"></i></a>
            <a href="#"><i class="fa-brands fa-instagram text-white text-2xl"></i></a>
            <a href="#"><i class="fa-brands fa-youtube text-white text-2xl"></i></a>
          </div>
        </div>
        <div class="flex gap-24">
          <div class="flex flex-col gap-5 items-start">
            <h5 class="text-princetonOrange font-semibold">Perusahaan</h5>
            <a href="#" class="text-gray-400">Tentang Kami</a>
            <a href="#" class="text-gray-400">Blog</a>
            <a href="#" class="text-gray-400">Kontak</a>
          </div>
          <div class="flex flex-col gap-5 items-start">
            <h5 class="text-princetonOrange font-semibold">Bantuan</h5>
            <a href="#" class="text-gray-400">FAQs</a>
            <a href="#" class="text-gray-400">Pusat Bantuan</a>
            <a href="#" class="text-gray-400">Keamanan</a>
          </div>
          <div class="flex flex-col gap-5 items-start">
            <h5 class="text-princetonOrange font-semibold">Lainnya</h5>
            <a href="#" class="text-gray-400">Jadi Anggota</a>
            <a href="#" class="text-gray-400">Events</a>
            <a href="#" class="text-gray-400">Syarat & Ketentuan</a>
          </div>
        </div>
        </div>
        <div class="w-full h-0.5 bg-white mt-20 rounded-full"></div>
        <div class="copyright">
          <p class="text-white text-sm mt-7">&copy; <span id="year"></span> Travloc. All Rights Reserved.</p>
        </div>
      </footer>
    `;

    // Tahun realtime footer
    const currentYearElement = this._shadowRoot.getElementById('year');
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  }
}

customElements.define('app-footer', AppFooter);
