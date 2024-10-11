import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email already exists"],
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    },
    
});

export default models.User || model("User", userScema); // If the model already exists, use it, otherwise create a new one, this is to avoid model duplication errors since Next.js uses hot reloading