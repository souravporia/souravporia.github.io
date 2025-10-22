$(function () {
    // Sidebar toggle for small screens
    $('#sidebarToggle').on('click', function () {
    $('#sidebar').toggleClass('show');
    });

    // Smooth scrolling and active state
    $('#sidebar a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(target).offset().top - 80 }, 400);
    $('#sidebar a').removeClass('active');
    $(this).addClass('active');
    if ($(window).width() < 992) $('#sidebar').removeClass('show');
    });

    // Back to top button
    $(window).on('scroll', function() {
    if ($(this).scrollTop() > 300) {
        $('#backToTop').addClass('show');
    } else {
        $('#backToTop').removeClass('show');
    }
    });

    $('#backToTop').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 400);
    });

    // Update active nav item on scroll
    $(window).on('scroll', function() {
    let currentSection = '';
    $('section').each(function() {
        const sectionTop = $(this).offset().top - 100;
        if ($(window).scrollTop() >= sectionTop) {
        currentSection = $(this).attr('id');
        }
    });
    
    if (currentSection) {
        $('#sidebar a').removeClass('active');
        $('#sidebar a[href="#' + currentSection + '"]').addClass('active');
    }
    });
});