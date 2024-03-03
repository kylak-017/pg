const mongoose = require("mongoose");

//define a message schema for the database
const MessageSchema = new mongoose.Schema({
    // TODO (step 3.1): Write the schema for a message
    content: String,
    sender : {
        _id:String,
        name: String,
    },
    recipient: {
        _id: String,
        name:String,
    },
    timeStamp: { type: DataTransfer, default: Date.now}

});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);
