const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const mailBoxSchema = new Schema(
    {
        name: String,
        comment: {type: String, maxlength: "300" , required: true},
        userId: { type: Schema.Types.ObjectId, ref: 'User' }
        }
);

const mailBoxSchema = model("Mailbox", mailBoxSchema);

module.exports = Mailbox;
