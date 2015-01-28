(function() {
  $(function() {
    var activePage, capitalized, image, images, img, _i, _len;
    capitalized = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    activePage = capitalized($('body').attr('id'));
    $("a:contains('" + activePage + "')").parent().addClass('active');
    $("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
    $('ul.nav li.dropdown').hover(function() {
      return $('.dropdown-menu', this).fadeIn();
    }, function() {
      return $('.dropdown-menu', this).fadeOut('fast');
    });
    images = ['seattle_skyline.jpg', 'jewelry_workshop.jpg', 'painting_workshop.jpg', 'pottery_workshop.jpg', 'quicksketch_workshop.jpg'];
    for (_i = 0, _len = images.length; _i < _len; _i++) {
      image = images[_i];
      img = document.createElement('img');
      img.src = "images/carousel/" + image;
    }
    return $(".photogrid [data-toggle='tooltip']").tooltip();
  });

}).call(this);
