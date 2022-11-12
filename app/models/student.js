const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: [true, 'Entrez un prénom'],
        trim: true
    },
    lastname: {
        type: String,
        require: [true, 'Entrez un nom'],
        trim: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updateAt: "update_at"
    }
});
module.exports = mongoose.model('Student', studentSchema);