console.log('This website was built by Julian Kyer. Inquiries at julian.kyer@gmail.com.');

$(document).ready(function() {
  $('.nav-item').on('click', function(e) {
    e.preventDefault();
    
    var target = this. hash;
    var $target = $(target);
    
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing');
  });
});
