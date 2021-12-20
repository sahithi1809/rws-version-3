const mongose = require('mongoose');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongose.Schema({
    name : {
        type :String,
        required:true
    },
    email: {
        type :String,
        required:true
    },
    Phone: {
        type :Number,
        required:true
    }, 
    password: {
        type: String, 
        required: true
    },
    cpassword: {
        type: String, 
        required: true
    }, 
    tokens: [ 
        {
            token: {
                type: String, 
                required: true
            }
        }
    ]
})

// hash the password

userSchema.pre('save', async function(next) { 
    console.log("Hi");
    if(this.isModified('password')) 
    {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    } 
    next();
}); 

userSchema.methods.generateAuthToken = async function() 
{
    try 
    {
        let tokenfun = jwt.sign({_id:this._id}, process.env.SECRET_KEY); 
        this.tokens = this.tokens.concat( {token:tokenfun}); 
        const sav = await this.save(); 
        return tokenfun;
    }
    catch(err) 
    {
        console.log(err);
    }
}

const User =  mongose.model('USERS' , userSchema);

module.exports = User; 

