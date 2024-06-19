const scrollHandler = () => {
  const header = document.getElementById('header');
  const registerBtn = document.getElementById('register');
  if (window.scrollY > 0) {
    header.classList.remove('bg-transparent');
    header.classList.remove('h-40');
    header.classList.add('bg-maastrichtBlue');
    header.classList.add('h-24');
    registerBtn.classList.remove('bg-white');
    registerBtn.classList.add('bg-princetonOrange');
    registerBtn.classList.remove('text-princetonOrange');
    registerBtn.classList.add('text-white');
  } else {
    header.classList.remove('bg-maastrichtBlue');
    header.classList.remove('h-24');
    header.classList.add('bg-transparent');
    header.classList.add('h-40');
    registerBtn.classList.add('bg-white');
    registerBtn.classList.remove('bg-princetonOrange');
    registerBtn.classList.add('text-princetonOrange');
    registerBtn.classList.remove('text-white');
  }
}

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
}

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

document.addEventListener('DOMContentLoaded', () => {
  faqCardToogleHandler();
  const cards = document.querySelectorAll('.toogle-card');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      toggleCardSize(card);
    });
  });
});

window.addEventListener('scroll', function () {
  scrollHandler();
});
