const faqCardToogleHandler = () => {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach((card) => {
    card.addEventListener('click', () => {
      const paragraph = card.querySelector('p');
      const isHidden = paragraph.classList.contains('hidden');

      document
        .querySelectorAll('.faq-card p')
        .forEach((p) => p.classList.add('hidden'));

      if (isHidden) {
        paragraph.classList.remove('hidden');
      }
    });
  });
};

export default faqCardToogleHandler;