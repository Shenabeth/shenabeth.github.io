const collapsibleBtns = document.querySelectorAll('.collapsible');

collapsibleBtns.forEach(function (button) {
  button.addEventListener('click', function () {
    const content = this.nextElementSibling;

    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});
