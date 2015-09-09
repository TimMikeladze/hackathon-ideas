Meteor.methods({
    'joinTeam': function (doc, docId) {
        check(doc, TeamMemberSchema);
        Ideas.update({_id: docId}, {$push: {teamMembers: doc.$set}});
    },
    'leaveTeam': function (doc, docId) {
        console.log(doc);
    }
});