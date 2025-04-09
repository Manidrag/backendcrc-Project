const mongoose= require('mongoose');
const bcrypt= require('bcryptjs');
const Userschema= new mongoose.Schema({
    username   : {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    password    : {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 1024
    },
})
//Creating Hash for password before saving to database
//using pre middleware
Userschema.pre('save',async function(next) {
    if(!this.isModified('password'))
    this.password= await bcrypt.hash(this.password,13);
    next();
})

//comparing passwords
Userschema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
}
const User= mongoose.model('User', Userschema);
module.exports= User;

