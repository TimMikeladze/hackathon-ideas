Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    waitOn: function () {
        Meteor.subscribe('ideas');
    },
    action: function () {
        this.render('ideas');
    },
    data: {
        ideas: function () {
            return Ideas.find({}, {sort: {createdAt: -1}});
        }
    }
});

Router.route('/ideas/create', function () {
    this.render('ideaCreate');
});

Router.route('/ideas/edit/:id', {
    waitOn: function () {
        Meteor.subscribe('ideas');
    },
    action: function () {
        this.render('ideaEdit');
    }
});

