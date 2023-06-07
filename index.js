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










// const screens = document.querySelectorAll('.screen');

// let currentScreenIndex = 0;
// let isScrolling = false; // Flag to prevent multiple scroll events

// rightSidebar.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   if (!isScrolling) {
//     // Check if the scroll direction is down
//     if (event.deltaY > 0) {
//       scrollToNextScreen();
//     } else {
//       scrollToPreviousScreen();
//     }
//   }
// });

// function scrollToNextScreen() {
//   const isAtBottom = rightSidebar.scrollHeight - rightSidebar.scrollTop === rightSidebar.clientHeight;
//   if (currentScreenIndex < screens.length - 1 && !isAtBottom) {
//     isScrolling = true;
//     currentScreenIndex++;
//     const nextScreen = screens[currentScreenIndex];
//     const scrollTop = rightSidebar.scrollTop + nextScreen.getBoundingClientRect().top;
//     rightSidebar.scrollTo({ top: scrollTop, behavior: 'smooth' });

//     // Reset isScrolling flag after scroll animation completes
//     setTimeout(() => {
//       isScrolling = false;
//     }, 800); // Adjust the duration as needed
//   }
// }

// function scrollToPreviousScreen() {
//   if (currentScreenIndex > 0) {
//     isScrolling = true;
//     currentScreenIndex--;
//     const previousScreen = screens[currentScreenIndex];
//     const scrollTop = rightSidebar.scrollTop + previousScreen.getBoundingClientRect().top;
//     rightSidebar.scrollTo({ top: scrollTop, behavior: 'smooth' });

//     // Reset isScrolling flag after scroll animation completes
//     setTimeout(() => {
//       isScrolling = false;
//     }, 800); // Adjust the duration as needed
//   }
// }

