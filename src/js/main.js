
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

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const dropdownHeader = dropdown.querySelector(".dropdown-header");
  const dropdownContent = dropdown.querySelector(".dropdown-content");
  const dropdownIcon = dropdown.querySelector('.dropdown-btn')
  dropdownHeader.addEventListener("click", () => {
    dropdownContent.classList.toggle('hidden');
    dropdownIcon.classList.toggle('rotate-180')
  })
})



var swiper = new Swiper(".cards-swiper", {
  effect: "cards",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



$(document).ready(function () {

  $("#modal-recovery .modal-bottom .fancybox, #modal-authorization .modal-bottom .fancybox").click(function () {
    $.fancybox.close(true);
    console.log('salom');
  });

  $("#modal-registration .btn-main").click(function (e) {
    e.preventDefault();
    $.fancybox.close(true);
    $.fancybox.open({
      src: '#modal-success',
      type: 'inline'
    });
  });

  var properties = {
    duration: 8000,     // Длительность движения в миллисекундах, чем больше тем медленнее.
    direction: 'left',  // Направление, может быть 'left' или 'right'.
    delayBeforeStart: 0 // Задержка в миллисекундах перед началом движения.
  };
  $('.logo-slider-wrap').marquee(properties);

  $(".fancybox").fancybox({
    autoFocus: false
  });

  $(".input-phone").mask("+7 (999) 999-99-99");


   const allInputs = $(".code-input");

    allInputs.on("input", function () {
      const inputs = $(".code-input"); // Har gal yangilab olaylik
      const input = $(this);
      let value = input.val().replace(/[^0-9]/g, '');
      const currentIndex = inputs.index(this);

      if (value.length > 1) {
        for (let i = 0; i < value.length; i++) {
          if (currentIndex + i < inputs.length) {
            inputs.eq(currentIndex + i).val(value[i]);
          }
        }
        const next = inputs.eq(currentIndex + value.length);
        if (next.length) next.focus();
      } else {
        input.val(value.slice(0, 1));
        inputs.eq(currentIndex + 1).focus();
      }
    });

    allInputs.on("keydown", function (e) {
      const inputs = $(".code-input");
      const input = $(this);
      const currentIndex = inputs.index(this);

      if (e.key === "Backspace" && input.val() === "") {
        inputs.eq(currentIndex - 1).focus();
      }
    });

    allInputs.on("paste", function (e) {
      const paste = (e.originalEvent || e).clipboardData.getData('text');
      const digits = paste.replace(/[^0-9]/g, '').slice(0, allInputs.length);
      allInputs.each(function (i) {
        $(this).val(digits[i] || "");
      });
      allInputs.eq(digits.length).focus();
      e.preventDefault();
    });
})
