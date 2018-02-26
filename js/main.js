$('.hero-wrapper').waypoint(function(direction) {
  if (direction == "down") {
    $('.navbar').addClass('white');
    $('#toggle').addClass('tog-move')
  } else if (direction == "up") {
    $('.navbar').removeClass('white');
    $('#toggle').removeClass('tog-move')
  }
});
