// $('.hero-wrapper').waypoint(function(direction) {
//   if (direction == "down") {
//     $('.navbar').addClass('white');
//     $('#toggle').addClass('tog-move')
//   } else if (direction == "up") {
//     $('.navbar').removeClass('white');
//     $('#toggle').removeClass('tog-move')
//   }
// });

$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('.navbar').addClass('white');
    $('.bars').addClass('black-bars')
  } else {
    $('.navbar').removeClass('white');
    $('.bars').removeClass('black-bars')
  }
})
