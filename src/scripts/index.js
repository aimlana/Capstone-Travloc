import '../styles/output.css';
import './components/components'
import scrollHandler from './handlers/scroll-handler-navbar';
import faqCardToogleHandler from './handlers/faq-card-handler';
import { setupCardToggleListeners } from './handlers/toggle-card-size-handler';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init();
  const currentPath = window.location.pathname;

  // Periksa apakah halaman adalah index.html atau halaman root
  if (currentPath === '/' || currentPath.endsWith('index.html')) {
    scrollHandler();
    faqCardToogleHandler();
    setupCardToggleListeners();
  } 
});
