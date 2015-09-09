Template.leaveTeam.events({
    'click .btn': function (event, template) {
        var _id = template.data._id;
        $('#idea-leave-team-modal-' + _id).closeModal();
    }
});