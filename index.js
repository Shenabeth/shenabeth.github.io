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
const progressBar = document.querySelector('.progress-bar-container');

menuBtn.addEventListener('click', function () {
  menuSidebar.classList.toggle('open');
  rightSidebar.classList.toggle('collapsed');
  if (menuSidebar.classList.contains('open')) {
    progressBar.style.width = '81vw';

    rightSidebar.style.width = '81vw';
    rightSidebar.style.left = '19vw';
    
    
    menuSidebar.style.width = '15vw';
    menuSidebar.classList.remove('hide-contents');
  } else {
    progressBar.style.width = '96vw';

    rightSidebar.style.width = '96vw';
    rightSidebar.style.left = '4vw';
    
    menuSidebar.style.width = '0vw';
    menuSidebar.classList.add('hide-contents');
  }
});


window.addEventListener("DOMContentLoaded", function () {
  const progressBar = document.querySelector(".progress-bar");

  rightSidebar.addEventListener("scroll", function () {
    const scrollTop = rightSidebar.scrollTop;
    const scrollHeight = rightSidebar.scrollHeight;
    const clientHeight = rightSidebar.clientHeight;

    const scrolledPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = scrolledPercent + "%";
  });
});
