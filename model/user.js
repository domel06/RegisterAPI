var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required:'this field is required' 
    },
    password:{
        type: String,
        required:'password is required'
    }
});
mongoose.model('User',employeeSchema);