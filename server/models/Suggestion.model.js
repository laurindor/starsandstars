const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const suggestionSchema = new Schema(
    {
        name: String,
        comment: {type: String, maxlength: "300" , required: true},
        user: { type: Schema.Types.ObjectId, ref: 'User' }
        }
);

const Suggestion = model("Suggestion", suggestionSchema);

module.exports = Suggestion;
