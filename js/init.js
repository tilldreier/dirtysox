(function ($) {
    $(function () {
        $('.button-collapse').sideNav();

        $('.materialboxed').materialbox();

        $('.productImgSmall').click(function (e) {
            var smallImgSrc = $(this).attr('src');
            var bigImgSrc = $('#productImgBig').attr('src');

            // Swap Images
            $(this).attr('src', bigImgSrc);
            $('#productImgBig').attr('src', smallImgSrc);
        });

        if ($(window).hashchange) {
            $(window).hashchange(checkFilter);
            $(window).hashchange();
        }

        if ($('.carousel.carousel-slider')) {
            $('.carousel.carousel-slider').carousel({fullWidth: true});

            autoplay()
        }
    }); // end of document ready

    function autoplay() {
        $('.carousel.carousel-slider').carousel('next');
        setTimeout(autoplay, 10000);
    }

    function checkFilter() {
        var sHash = location.hash;
        var sUrlText;

        if (sHash === "#all") {
            $('#all-products div').each(function (index) {
                $(this).show();
            });
            sUrlText = $("a[href='" + sHash + "']").text();
        } else if (sHash === "#hot" ||
            sHash === "#mini-original" ||
            sHash === "#high" ||
            sHash === "#rider") {
            $('#all-products div').each(function (index) {
                var sCategory = $(this).data("category");
                if (sCategory.indexOf(sHash) >= 0) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
            sUrlText = $("a[href='" + sHash + "']").text();
        }


        if ( sUrlText !== null && sUrlText !== undefined ) {
            $("#size-button").html("<i class='material-icons right'>arrow_drop_down</i>" + sUrlText);
        }
    }
})(jQuery); // end of jQuery name space