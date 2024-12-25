import {mongoose} from '../db.js'
import { DateTime } from 'luxon';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import validator from 'validator';
import PasswordValidator from 'password-validator';

const User = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
        index: true
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 50,
        trim: true,
        index: true
    },
    dob:{
        type: Date,
        required: true,
        trim: true,
        validate: {
          validator: (value) => {
            if (typeof value !== 'string') return false;
            const dateFormat = [
                "dd/MM/yyyy",
                "dd-MM-yyyy",
                "MM/dd/yyyy",
                "MM-dd-yyyy",
                "yyyy/MM/dd",
                "yyyy-MM-dd",

            ]
            const isvalid = dateFormat.some((format) =>{
                const dates = DateTime.fromFormat(value, format);
                return dates.isValid && dates < DateTime.now()
            })
            return isvalid
          },
          message: "Invalid date of birth format or future date.",
        },
  
    },
    gender:{
        type: String,
        enum: ['Male', 'Female'],
        trim: true,
        required: true
    },
    phone:{
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: (value) => {
                const phoneNumber = parsePhoneNumberFromString(value)
                if (phoneNumber) {
                    return phoneNumber.isValid()
                }
                return false
            },
            message: 'number is not valid, enter with your country code'
        }

    },
    about:{
        type: String,
        trim: true
    },
    address:{
        type: String,
        trim: true
    },
    nationality:{
        type: String,
        trim: true,
        required: true,
        index: true
    },
    skills:{
        type : [String],
        trim: true,
        index: true
    },
    education:{
        type : [String],
        trim: true,
    },
    experience:{
        type : [String],
        trim: true,
        index: true
    },
    interests:{
        type : [String],
        trim: true,
        index: true
    },
    hobbies:{
        type : [String],
        trim: true,
        index: true
    },
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 20,
      trim: true,
      index: true,
      // custom validator for username uniqueness
      validate: {
        validator: async (value) => {
            if (value.length < 5 || value.length > 20) {
                throw new Error("Username must be between 5 and 20 characters.");
            }
            const usernameRegex = /^[a-zA-Z]+[a-zA-Z0-9-_]{4,19}$/;
            if (!usernameRegex.test(value)) {
                throw new Error("Username format is invalid. It must start with a letter and be followed by letters, numbers, hyphens, or underscores.");
            }
            try {
                const user = await this.constructor.findOne({ username: value });
                if (user) {
                    throw new Error("Username already exists.");
                }
            } catch (error) {
                throw new Error("Database error: " + error.message);
            }

            return true;
        }
    }
},
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
      // custom validator for email uniqueness
      validate: {
         validator: async (value) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value) || !validator.isEmail(value)) {
                throw new Error("Email format is invalid or not valid.");
            }
            try {
                const user = await this.constructor.findOne({ email: value });
                if (user) {
                    throw new Error("Email already exists.");
                }
            } catch (e) {
                throw new Error(`Database error: ${e.message}`);
            }
            return true;
        }
    }
},
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
      validate: {
        validator: async (value) => {
            const passwordFormat = new PasswordValidator();
            passwordFormat
                .is().min(8)
                .is().max(100)
                .has().uppercase()
                .has().lowercase()
                .has().digits()
                .has().symbols()
                .has().not().spaces()

            const isValid = passwordFormat.validate(value);
            const errors = passwordFormat.validate(value, { list: true });

            if (!isValid) {
                throw new Error(`Password is invalid. Issues: ${errors.join(', ')}`)
            }

            return true
        }
    }
},
    profilePic: {
      type: String,
      default: null,
      validate: {
        validator: function(value) {
            return validator.isURL(value, { require_tld: false, protocols: ['file'] }) || /^\/uploads\/.*\.(jpg|jpeg|png|gif)$/.test(value);
        },
        message: error => `${error.value} is not a valid profile picture path, must has a valid image extension (jpg, jpeg, png, gif).!`
    }
},
    coverPic: {
      type: String,
      default: null,
      validate: {
        validator: function(value) {
            return validator.isURL(value, { require_tld: false, protocols: ['file'] }) || /^\/uploads\/.*\.(jpg|jpeg|png|gif)$/.test(value);
        },
        message: error => `${error.value} is not a valid cover picture path, must has a valid image extension (jpg, jpeg, png, gif).!`
    }
},
},
    { timestamps: true }
  );
  
  const Users = mongoose.model("User", User);
  
  export default Users;