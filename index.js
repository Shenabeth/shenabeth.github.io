// const collapsibleBtns = document.querySelectorAll('.collapsible');
// const menuBtn = document.querySelector('.menuImg');
// const leftSidebar = document.querySelector('.left-sidebar');
// const rightSidebar = document.querySelector('.right-sidebar');

// menuBtn.addEventListener('click', function () {
//   leftSidebar.classList.toggle('collapsed');
//   rightSidebar.classList.toggle('expanded');
// });

// collapsibleBtns.forEach(function (button) {
//   button.addEventListener('click', function () {
//     const content = this.nextElementSibling;
//     const arrow = this.querySelector('.arrow');

//     content.classList.toggle('show');

//     if (content.classList.contains('show')) {
//       arrow.classList.remove('fa-chevron-down');
//       arrow.classList.add('fa-chevron-right');
//     } else {
//       arrow.classList.remove('fa-chevron-right');
//       arrow.classList.add('fa-chevron-down');
//     }
//   });
// });







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
