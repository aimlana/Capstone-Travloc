import '../styles/output.css';
import './components/components'
import scrollHandler from './handlers/scroll-handler-navbar';
import faqCardToogleHandler from './handlers/faq-card-handler';
import { setupCardToggleListeners } from './handlers/toggle-card-size-handler';

document.addEventListener('DOMContentLoaded', () => {
  scrollHandler();
  faqCardToogleHandler();
  setupCardToggleListeners();
});


