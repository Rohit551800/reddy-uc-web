window.addEventListener('componentsLoaded', () => {

  // ── FADE UP OBSERVER ──────────────────────────────────
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.fade-up').forEach((el) => {
    observer.observe(el);
  });

  // ── CAROUSEL FUNCTION ─────────────────────────────────
  function setupCarousel(trackId, prevId, nextId, gap) {

    const track = document.getElementById(trackId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);

    if (!track || !prev || !next) return;

    const items = track.children;

    if (!items.length) return;

    let index = 0;

    function visibleCount() {

      const cardWidth =
        items[0].getBoundingClientRect().width + gap;

      const containerWidth =
        track.parentElement.getBoundingClientRect().width;

      return Math.max(
        1,
        Math.floor(containerWidth / cardWidth)
      );
    }

    function scroll(dir) {

      const max =
        Math.max(0, items.length - visibleCount());

      index = Math.min(
        max,
        Math.max(0, index + dir)
      );

      const cardWidth =
        items[0].getBoundingClientRect().width + gap;

      track.style.transform =
        `translateX(-${index * cardWidth}px)`;
    }

    prev.addEventListener('click', () => scroll(-1));
    next.addEventListener('click', () => scroll(1));

    window.addEventListener('resize', () => {

      index = 0;

      track.style.transform =
        'translateX(0)';

    });

  }

  // ── SERVICES CAROUSEL ────────────────────────────────
  setupCarousel(
    'svcCarousel',
    'svcPrev',
    'svcNext',
    32
  );

  // ── TEAM CAROUSEL ────────────────────────────────────
  setupCarousel(
    'teamCarousel',
    'teamPrev',
    'teamNext',
    24
  );

  // ── NAVBAR SHADOW ────────────────────────────────────
  const navbar = document.querySelector('.navbar');

  if (navbar) {

    window.addEventListener('scroll', () => {

      navbar.style.boxShadow =
        window.scrollY > 10
          ? '0 4px 20px rgba(0,0,0,0.15)'
          : '0 4px 12px rgba(0,0,0,0.08)';

    });

  }

  // ── MEGA MENU ────────────────────────────────────────
  const servicesToggle =
    document.getElementById('servicesToggle');

  const megaMenu =
    document.getElementById('megaMenu');

  const megaOverlay =
    document.getElementById('megaOverlay');

  if (
    servicesToggle &&
    megaMenu &&
    megaOverlay
  ) {

    servicesToggle.addEventListener(
      'click',
      (e) => {

        e.preventDefault();

        megaMenu.classList.toggle('open');
        megaOverlay.classList.toggle('open');

        const arrow =
          servicesToggle.querySelector('svg');

        if (arrow) {

          arrow.style.transform =
            megaMenu.classList.contains('open')
              ? 'rotate(180deg)'
              : 'rotate(0deg)';

          arrow.style.transition =
            'transform 0.3s ease';
        }

      }
    );

    megaOverlay.addEventListener(
      'click',
      () => {

        megaMenu.classList.remove('open');
        megaOverlay.classList.remove('open');

      }
    );

    document.addEventListener(
      'keydown',
      (e) => {

        if (e.key === 'Escape') {

          megaMenu.classList.remove('open');
          megaOverlay.classList.remove('open');

        }

      }
    );

    megaMenu.querySelectorAll('a')
      .forEach((link) => {

        link.addEventListener(
          'click',
          () => {

            megaMenu.classList.remove('open');
            megaOverlay.classList.remove('open');

          }
        );

      });

    document
      .querySelectorAll(
        '.navbar-nav .nav-link:not(#servicesToggle)'
      )
      .forEach((link) => {

        link.addEventListener(
          'click',
          () => {

            megaMenu.classList.remove('open');
            megaOverlay.classList.remove('open');

          }
        );

      });

  }

});