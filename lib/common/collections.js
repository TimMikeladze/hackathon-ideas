TeamMemberSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    email: {
        type: String,
        label: 'Email',
        regEx: SimpleSchema.RegEx.Email,
    }
});

IdeaSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    description: {
        type: String,
        label: 'Description',
        autoform: {
            rows: 10
        }
    },
    submittedBy: {
        type: String,
        label: 'Submitter\'s name'
    },
    technologies: {
        type: String,
        label: 'Technologies this idea is dependant on'
    },
    teamMembers: {
        type: [TeamMemberSchema],
        label: 'Team members',
        optional: true
    },
    createdAt: {
        type: Date,
        label: 'The timestmap of creation',
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date
                };
            } else {
                this.unset();
            }
        }
    }
});

Ideas = new Mongo.Collection('ideas');
Ideas.attachSchema(IdeaSchema);