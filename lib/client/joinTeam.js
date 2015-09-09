Template.joinTeam.events({
    'click .btn': function (event, template) {
        var _id = template.data._id;
        $('#idea-join-team-modal-' + _id).closeModal();
    }
});