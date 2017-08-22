const {Users} = require('./users');

var isRealString  = (str) => {
    return typeof str === 'string' && str.trim().length > 0;
    
};  

var checkDuplicate = (theuser, userparam) => {
    
 
        for ( var x = 0 ; x < theuser.length; x++){
    
                if (theuser[x] === userparam){
                    return this;
    }
}
         
   
    
}

module.exports = {isRealString, checkDuplicate};