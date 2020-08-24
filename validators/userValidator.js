const Joi = require('joi'); 

const schema = Joi.object( {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required()
  });


const validateUser = async (user) => {
    try {
        console.log({user});
        return value = await schema.validateAsync({user});
        console.log("After validate")
        
    }
    catch (err) {
 
        console.log(err)
        

     }
    
  }
  
  module.exports = validateUser;