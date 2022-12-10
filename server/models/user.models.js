import mongoose from 'mongoose'; 
import bcrypt from 'bcrypt';
import validator from 'validator';
const { Schema } = mongoose; 

const UserSchema = new Schema({
    first_name: {
        type: String, 
        required: true
    },
    last_name: {
        type: String, 
        required: true
    },

    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    username: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
});

UserSchema.statics.signup = async function(first_name, last_name, email, username, password){
    if (!first_name || !last_name || !email || !username || !password){
        throw Error('All fields must be filled!'); 
    }

    // if(!validator.isEmail(email)){ //checks if email is real
    //     throw Error('Invalid Email!');
    // }

    if(!validator.isStrongPassword(password)){
        throw Error('Strong Password is needed!');
    }

    const exists = await this.findOne({email});

    if(exists){
        throw Error('Email already exists.');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({first_name, last_name, email, username, password: hash});

    return user; 
}

UserSchema.statics.login = async function (email, password) {
    
    if (!email || !password) {
        throw Error ('All fields must be filled!');
    }

    const user = await this.findOne({email});

    if (!user) {
        throw Error('Incorrect Email!');
    }

    const foundMatch = await bcrypt.compare(password, user.password);

    if (!foundMatch){
        throw Error ('Incorrect Password!');
    }

    return user;
}

export const User = mongoose.model('User', UserSchema);