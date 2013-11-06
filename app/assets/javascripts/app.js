jQuery(window).ready(function($) {

    $('#showMenu').click(function(){

        $menuLeft = $('#cbp-spmenu-s1');
        $body = $('body');
        $el = $(this);

        $el.toggleClass('active');
        $body.toggleClass('cbp-spmenu-push-toright');
        $menuLeft.toggleClass('cbp-spmenu-open' );
    });


    $('.hideMenu').click(function(){
        var $menuLeft = $('#cbp-spmenu-s1'),
            $body = $('body'),
            $plogo = $('.ph');

        $plogo.removeClass('active');
        $body.removeClass('cbp-spmenu-push-toright');
        $menuLeft.removeClass('cbp-spmenu-open' );
    });

});