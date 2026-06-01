const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {},
    username: {},
    password: {},
});

const User = mongoose.model("User", userSchema);
module.exports = User;