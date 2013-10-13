//Ember

App = Ember.Application.create(
);

App.Router.map(function() {
    this.resource('index');
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
        }
    }
});


App.ProjectRoute = Ember.Route.extend({

    model: function(){
        return $.getJSON('http://api.randomuser.me/?results=4').then(function(data) {
            return data.results
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
        }
    ]
};