(function () {
  var content = document.querySelector('.post-content.prose');
  var tocList = document.getElementById('toc-list');
  var sidebar = document.getElementById('toc-sidebar');
  if (!content || !tocList || !sidebar) return;

  var headings = Array.from(content.querySelectorAll('h1, h2, h3'));
  if (headings.length < 2) {
    sidebar.style.display = 'none';
    return;
  }

  headings.forEach(function (h, i) {
    if (!h.id) h.id = 'toc-h-' + i;
  });

  headings.forEach(function (h) {
    var li = document.createElement('li');
    li.className = 'toc-' + h.tagName.toLowerCase();
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  var links = Array.from(tocList.querySelectorAll('a'));

  function setActive() {
    var scrollY = window.scrollY + 130;
    var active = headings[0];
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top + window.scrollY <= scrollY) {
        active = headings[i];
      }
    }
    links.forEach(function (a) {
      a.classList.toggle('toc-active', active && a.getAttribute('href') === '#' + active.id);
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
