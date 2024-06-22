const toggleCardSize = (card) => {
  const linkContainer = card.querySelector('.link-container');

  if (card.classList.contains('w-161.2')) {
    card.classList.remove('w-161.2');
    card.classList.add('w-92.7');
    linkContainer.classList.add('hidden');
  } else if (card.classList.contains('w-92.7')) {
    card.classList.remove('w-92.7');
    card.classList.add('w-161.2');
    linkContainer.classList.remove('hidden');
  }
};

const setupCardToggleListeners = () => {
  const cards = document.querySelectorAll('.toogle-card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      toggleCardSize(card);
    });
  });
};

export { setupCardToggleListeners };