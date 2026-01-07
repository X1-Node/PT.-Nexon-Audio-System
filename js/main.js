document.addEventListener('DOMContentLoaded', () => {
    console.log('Web PT. Nexonic Audio Systems siap!'); // Konsol log disesuaikan

    // Smooth Scrolling untuk navigasi
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah dikirim. Tim Nexonic akan segera menghubungi Anda.'); // Pesan alert disesuaikan
            this.reset();
        });
    }

    // Scroll produk horizontal dengan tombol panah
    const productList = document.querySelector('.product-list-horizontal');
    const btnLeft = document.querySelector('.scroll-btn.left');
    const btnRight = document.querySelector('.scroll-btn.right');

    if (productList && btnLeft && btnRight) {
      btnLeft.addEventListener('click', () => {
        productList.scrollBy({
          left: -300,  // scroll 300px ke kiri
          behavior: 'smooth',
        });
      });

      btnRight.addEventListener('click', () => {
        productList.scrollBy({
          left: 300,  // scroll 300px ke kanan
          behavior: 'smooth',
        });
      });
    }
});
