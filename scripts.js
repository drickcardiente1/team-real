$(function() {
    /*Mobile Menu*/
    $('.menu-toggle').on('click', function() {
        $(this).parents('.site-header-main').toggleClass('is-open');
        $(this).toggleClass('selected');
        $(this).attr('aria-expanded', $(this).attr('aria-expanded') === 'false' ? 'true' : 'false');
    });
    /*Navigation on Scroll*/
    var headerOnScroll = function() {
        var scrollTop = $(window).scrollTop();
        var siteHeader = $(".site-header");
        headerFixed = "header-fixed";
        if (scrollTop > 0) {

            siteHeader.addClass(headerFixed);

        } else {
            siteHeader.removeClass(headerFixed);
        }
    };
    headerOnScroll();
    $(window).scroll(function() {
        headerOnScroll();
    });
    /*Navigation Scrolls to the IDs*/
    $(".main-navigation li a, .got-to-demo, .site-title a").click(function(e) {
        e.preventDefault();
        var getID = $(this).attr("href");
        $('html,body').animate({ scrollTop: $(getID).offset().top }, "slow");
    });
    // Back to top
    var amountScrolled = 200;
    var amountScrolledNav = 25;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('button.back-to-top').addClass('show');
        } else {
            $('button.back-to-top').removeClass('show');
        }
    });
    $('button.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
/*Add padding on Custom Header*/
$(window).on("load resize", function(e) {
    headerheight = $('#masthead').height();
    $(".custom-header").css("padding-top", headerheight);
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}