//Ember

App = Ember.Application.create(
);

App.Router.map(function() {

    this.resource('project');

});


App.ApplicationRoute = Ember.Route.extend({
    actions:{
        showMenu: function(){
            var $menuLeft = $('#cbp-spmenu-s1'),
            $showLeftPush = $('#showLeftPush'),
            $body = $('body'),
            $el = $(this);

            $el.toggleClass('active');
            $body.toggleClass('cbp-spmenu-push-toright');
            $menuLeft.toggleClass('cbp-spmenu-open' );
        }
    }
});



$(document).ready(function(){
    console.log('test')
});