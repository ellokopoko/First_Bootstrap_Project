(function() {
  $(function() {
    var activePage, capitalized;
    capitalized = function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    activePage = capitalized($('body').attr('id'));
    $("a:contains('" + activePage + "')").parent().addClass('active');
    $("#venuetravel a:contains('Venue/Travel')").parent().addClass('active');
    return $('ul.nav li.dropdown').hover(function() {
      return $('.dropdown-menu', this).fadeIn();
    }, function() {
      return $('.dropdown-menu', this).fadeOut('fast');
    });
  });

}).call(this);
