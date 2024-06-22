const scrollHandler = () => {
  window.addEventListener('scroll', function () {
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
  });
};

export default scrollHandler;