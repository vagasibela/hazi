$(document).ready(function() {
    // Lightbox megnyitása
    $('.gallery-image').on('click', function() {
        const imgSrc = $(this).attr('src');
        const imgAlt = $(this).attr('alt');
        
        $('#lightbox-image').attr('src', imgSrc).attr('alt', imgAlt);
        $('#image-caption').text(imgAlt);
        $('#lightbox').addClass('active');
        
        // Scroll letiltása
        $('body').css('overflow', 'hidden');
    });

    // Lightbox bezárása
    $('.close-btn, #lightbox').on('click', function(e) {
        // Csak ha a lightbox-ra vagy a bezáró gombra kattintottunk
        if($(e.target).is('#lightbox, .close-btn')) {
            $('#lightbox').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });

    // ESC billentyűre bezárás
    $(document).on('keyup', function(e) {
        if(e.key === "Escape" && $('#lightbox').hasClass('active')) {
            $('#lightbox').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });
});