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

        $('.quantity-dec').click(quantityDec);
        $('.quantity-inc').click(quantityInc);
        $('.x-clear').click(removeFromCart);

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
            sHash === "#maxi" ||
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


        if (sUrlText !== null && sUrlText !== undefined) {
            $("#size-button").html("<i class='material-icons right'>arrow_drop_down</i>" + sUrlText);
        }
    }

    function quantityDec() {
        var oQtyDiv = $(this).parent().find("div");
        var iQty = oQtyDiv.text();
        iQty--;
        if(iQty < 0){
            iQty = 0;
        }
        oQtyDiv.html(iQty);

        updateTotal();
    }

    function quantityInc() {
        var oQtyDiv = $(this).parent().find("div");
        var iQty = oQtyDiv.text();
        iQty++;
        oQtyDiv.html(iQty);

        updateTotal();
    }

    function updateTotal() {
        var iTotalQty = 0;
        $('.quantity').each(function (index) {
            var iQty = $(this).text();
            iTotalQty += Number( iQty );
        });

        $('#total-price').html( "CHF " + ( iTotalQty * 15.90 ).toFixed(2));
    }

    function removeFromCart() {
        $(this).closest( "tr" ).remove();

        updateTotal();
    }
})(jQuery); // end of jQuery name space