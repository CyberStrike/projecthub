//Ember

window.App = Ember.Application.create({
        ready: function(){}
    }

);

App.Router.map(function() {
    this.resource('project', function(){
        this.resource('about'),
            this.resource('updates'),
                this.resource('discuss')}
    );
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
        },
         hideMenu: function(){
            var $menuLeft = $('#cbp-spmenu-s1'),
            $showLeftPush = $('#showLeftPush'),
            $body = $('body'),
            $plogo = $('.ph');

            $plogo.removeClass('active');
            $body.removeClass('cbp-spmenu-push-toright');
            $menuLeft.removeClass('cbp-spmenu-open' );
        }
    }
});


App.ProjectRoute = Ember.Route.extend({

    model: function(){
        return $.getJSON('team.json').then(function(data) {
            return data
        });
    }
});

App.IndexRoute = Ember.Route.extend({

    model: function(){return projects}

});


projects ={
    "projects": [
        {
            "project": {
                "id": "0",
                "title": "Project 1",
                "likes": "10",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        },
        {
            "project": {
                "id": "1",
                "title": "Project 1",
                "likes": "5",
                "img": "/projects/15.jpg"
            }
        }
    ]
};