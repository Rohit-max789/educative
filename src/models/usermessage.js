const mongoose=require('mongoose');
const validator=require('validator');

const userSchema=mongoose.Schema({

    name:{
        type:String,
        require:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
        
        minLength:10
    },
  message:{
    type:String,
    required:true,
    minLength:3
  }

})

// we need collection
const User=mongoose.model("User",userSchema);
module.exports=User;


    
    
