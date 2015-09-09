AutoForm.setDefaultTemplate('materialize');

AutoForm.hooks({
    ideaCreateForm: {
        onSuccess: function (formType, result) {
            Router.go('/');
        }
    },
    ideaEditForm: {
        onSuccess: function (formType, result) {
            Router.go('/');
        }
    }
});

SimpleSchema.debug = true;