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
    
    # preLoad images for carousel
    images = ['seattle_skyline.jpg', 'jewelry_workshop.jpg', 'painting_workshop.jpg', 'pottery_workshop.jpg', 'quicksketch_workshop.jpg']
    for image in images
        img = document.createElement('img')
        img.src = "images/carousel/#{image}"
    
    # show tooltip
    $(".photogrid [data-toggle='tooltip']").tooltip()
    
    # show modals
    $(".modalphotos img").on('click', ->
        $("#modal").modal(
            show: true
        )
        
        mysrc = this.src.slice(0, this.src.length - 7) + ".jpg"
        $("#modalimage").attr('src', mysrc).on('click', ->
            $('#modal').modal('hide')
        )
    )