const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    function handleSubmit(e) {
      e.preventDefault();
      document.getElementById('form-success').hidden = false;
      e.target.reset();
    }

    function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }