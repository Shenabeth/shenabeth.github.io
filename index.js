const collapsibleBtns = document.querySelectorAll('.collapsible');
collapsibleBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    const content = this.nextElementSibling;
    const arrow = this.querySelector('.arrow');

    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      arrow.classList.remove('fa-chevron-down');
      arrow.classList.add('fa-chevron-right');
    } else {
      content.style.display = 'none';
      arrow.classList.remove('fa-chevron-right');
      arrow.classList.add('fa-chevron-down');
    }
  });
});


const menuBtn = document.querySelector('.menu-btn');
const menuSidebar = document.querySelector('.menu-sidebar');
const rightSidebar = document.querySelector('.right-sidebar');

menuBtn.addEventListener('click', function () {
  menuSidebar.classList.toggle('open');
  rightSidebar.classList.toggle('collapsed');
  if (menuSidebar.classList.contains('open')) {
    menuSidebar.style.width = '13vw';
    rightSidebar.style.width = '81vw';
    rightSidebar.style.left = '19vw';
    menuSidebar.classList.remove('hide-contents');
  } else {
    menuSidebar.style.width = '0vw';
    rightSidebar.style.width = '96vw';
    rightSidebar.style.left = '4vw';
    menuSidebar.classList.add('hide-contents');
  }
});
