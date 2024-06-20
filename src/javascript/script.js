$(document).ready(function () {
  // Open and close mobile menu
  $("#mobile_menu_btn").click(function () {
    $("#mobile_menu").toggleClass("active");
    $("#mobile_menu_btn").find("i").toggleClass("fa-x");
  });

  const sections = $('section');
  const navItems = $('.nav-item');

  // Add shadow to header on scroll and control active nav item
  $(window).scroll(function () {
    const header = $('header');
    const scrollPos = $(window).scrollTop() - header.outerHeight();
    
    if (scrollPos <= 0) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }
    
    let activeSectionIndex = 0; 

    sections.each(function (index) {
      const section = $(this);
      const sectionTop = section.offset().top - header.outerHeight();
      const sectionBottom = sectionTop + section.outerHeight();

      if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
        activeSectionIndex = index;
        return false;
      }
    });

    console.log(navItems[activeSectionIndex]);
    
    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });

  // Scroll Reveal animations
  ScrollReveal().reveal('#cta', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
  });
  ScrollReveal().reveal('.dish', {
    duration: 2000,
    origin: 'left',
    distance: '20%',
  });
  ScrollReveal().reveal('#testimonials_chef', {
    duration: 1000,
    origin: 'left',
    distance: '20%',
  });
  ScrollReveal().reveal('.feedback', {
    duration: 1000,
    origin: 'right',
    distance: '20%',
  });
})