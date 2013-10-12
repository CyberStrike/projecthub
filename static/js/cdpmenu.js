    $menuLeft = $('#cbp-spmenu-s1'),
    $showLeftPush = $('#showLeftPush'),
    $body = $('body');
    $el = $(this);

$showLeftPush.click( function() {
    $el.toggleClass('active');
    $body.toggleClass('cbp-spmenu-push-toright');
    $menuLeft.toggleClass('cbp-spmenu-open' );
    disableOther( 'showLeftPush' );
    console.log('test');
});


function disableOther( button ) {
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
}


$(document).ready(function(){
        console.log('test')
});