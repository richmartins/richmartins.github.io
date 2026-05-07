(function () {
  var overlay, img, caption;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');

    img = document.createElement('img');
    img.className = 'lb-img';

    caption = document.createElement('p');
    caption.className = 'lb-caption';

    var close = document.createElement('button');
    close.className = 'lb-close';
    close.setAttribute('aria-label', 'Close');
    close.innerHTML = '&times;';
    close.addEventListener('click', hide);

    overlay.appendChild(close);
    overlay.appendChild(img);
    overlay.appendChild(caption);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) hide();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') hide();
    });
  }

  function show(src, alt) {
    if (!overlay) build();
    img.src = src;
    img.alt = alt || '';
    caption.textContent = alt || '';
    caption.style.display = alt ? 'block' : 'none';
    overlay.classList.add('lb-visible');
    document.body.style.overflow = 'hidden';
  }

  function hide() {
    overlay.classList.remove('lb-visible');
    document.body.style.overflow = '';
    img.src = '';
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.prose img').forEach(function (el) {
      el.classList.add('lb-trigger');
      el.addEventListener('click', function () {
        show(el.src, el.alt);
      });
    });
  });
})();
