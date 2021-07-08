const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Index = mongoose.model('Index', new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    emil: {
        type: String,
        required: false,
    }
}));

module.exports = Index