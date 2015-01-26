$ () ->
    
    # Получить строку с заглавной буквы
    capitalized = (string) ->
        string.charAt(0).toUpperCase() + string.slice(1)
    
    # highlight the current nav
    activePage = capitalized $('body').attr('id')
    $("a:contains('" + activePage + "')").parent().addClass('active')
    $("#venuetravel a:contains('Venue/Travel')").parent().addClass('active')
    
    # make menus drop automatically
    $('ul.nav li.dropdown').hover(-> 
      $('.dropdown-menu', this).fadeIn()
    ->
      $('.dropdown-menu', this).fadeOut('fast')
    ) 