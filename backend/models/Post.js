const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true
        },
        image: {
            type: [],
            required: false,
        },
        video: {
            type: [],
            required: false,
        },
        description: {
            type: String,
            required: false,
            default: "Hi this is my post, Please like and share and support !"
        },
        comment: {
            type: [],
            required: false
        },
        like: {
            type: [],
            required: false
        },
        share: {
            type: [],
            required: false
        }
    },
    { timestamps: true }

)
module.exports = mongoose.model("Post", PostSchema)