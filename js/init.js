(function($){
  $(function(){
    $('.button-collapse').sideNav();

    $('.materialboxed').materialbox();

    $('.productImgSmall').click(function(e) {
        var smallImgSrc = $(this).attr('src');
        var bigImgSrc = $('#productImgBig').attr('src');

        // Swap Images
        $(this).attr('src', bigImgSrc);
        $('#productImgBig').attr('src', smallImgSrc);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space