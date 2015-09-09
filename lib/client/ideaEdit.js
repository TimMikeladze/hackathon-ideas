Template.ideaEdit.helpers({
    idea: function () {
        return Ideas.findOne({_id: Router.current().params.id});
    }
});