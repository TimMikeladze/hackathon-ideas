Template.idea.onRendered(function() {
    $('.dropdown-button').dropdown({
        constrainwidth: false
    });
});

Template.idea.helpers({
    teamMembers: function () {
        var formattedArray = [];
        var members = Template.instance().data.teamMembers;
        for (var index in members) {
            formattedArray.push(members[index].name + ' (' + members[index].email + ')');
        }
        return formattedArray.join(', ');
    }
});

Template.idea.events({
    'click .idea-join-team': function (event, template) {
        var _id = template.data._id;
        $('#idea-join-team-modal-' + _id).openModal();
    },
    'click .idea-leave-team': function (event, template) {
        var _id = template.data._id;
        $('#idea-leave-team-modal-' + _id).openModal();
    }
});