const collapsibleBtns = document.querySelectorAll('.collapsible');

collapsibleBtns.forEach(function(button) {
  button.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});
