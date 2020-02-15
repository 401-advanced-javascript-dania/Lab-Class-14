
const users = require('./users.js');
let aclMiddleware = function(ability){
  return (req,res,next)=>{
    try {
      //to ckeck req.user.capabilites
      //includes is array method return true or false
      if(users.checkForcapability(ability,req.user.role)){
        next();
      }else{
        next('access denied');
      }
    }catch(err){
      next('cannot login');
    }
  };
};
module.exports = aclMiddleware;