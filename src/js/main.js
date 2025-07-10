// document.addEventListener('DOMContentLoaded', function () {
//   const accordions = document.querySelectorAll('.accordion');

//   accordions.forEach(accordion => {
//     const header = accordion.querySelector('.accordion-header');
//     const content = accordion.querySelector('.accordion-content');
//     const btn = accordion.querySelector('.accordion-btn');
//     const svg = btn.querySelector('svg');

//     content.style.overflow = 'hidden';
//     content.style.transition = 'max-height 0.3s ease';

//     header.addEventListener('click', () => {
//       const isOpen = accordion.classList.contains('open');

//       if (isOpen) {
//         // Yopish
//         content.style.maxHeight = '0px';
//         accordion.classList.remove('open');
//         btn.classList.remove('active');
//         svg.classList.remove('rotate-180');
//       } else {
//         // Boshqalarni yopish
//         accordions.forEach(acc => {
//           acc.classList.remove('open');
//           acc.querySelector('.accordion-content').style.maxHeight = '0px';

//           const otherBtn = acc.querySelector('.accordion-btn');
//           const otherSvg = otherBtn.querySelector('svg');
//           otherBtn.classList.remove('active');
//           otherSvg.classList.remove('rotate-180');
//         });

//         // Yangi accordionni ochish
//         content.style.maxHeight = content.scrollHeight + 'px';
//         accordion.classList.add('open');
//         btn.classList.add('active');
//         svg.classList.add('rotate-180');
//       }
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion, index) => {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');
    const btn = accordion.querySelector('.accordion-btn');
    const svg = btn.querySelector('svg');

    content.style.overflow = 'hidden';
    content.style.transition = 'max-height 0.3s ease';

    // 👉 Default holatda 2-accordion (index 1) ochiq bo‘lishi
    if (index === 1) {
      accordion.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
      btn.classList.add('active');
      svg.classList.add('rotate-180');
    }

    header.addEventListener('click', () => {
      const isOpen = accordion.classList.contains('open');

      if (isOpen) {
        content.style.maxHeight = '0px';
        accordion.classList.remove('open');
        btn.classList.remove('active');
        svg.classList.remove('rotate-180');
      } else {
        accordions.forEach(acc => {
          acc.classList.remove('open');
          acc.querySelector('.accordion-content').style.maxHeight = '0px';

          const otherBtn = acc.querySelector('.accordion-btn');
          const otherSvg = otherBtn.querySelector('svg');
          otherBtn.classList.remove('active');
          otherSvg.classList.remove('rotate-180');
        });

        content.style.maxHeight = content.scrollHeight + 'px';
        accordion.classList.add('open');
        btn.classList.add('active');
        svg.classList.add('rotate-180');
      }
    });
  });
});
