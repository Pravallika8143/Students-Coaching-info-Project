var mongoose = require("mongoose");

var studentSchema = new mongoose.Schema({
  "name": {
    type:String,
    required:true,
},
  "age":{
    type:Number,
    required:true,
},
  "gender": {
    type:String,
    required:true,
},    
  "course": {
    type:String,
    required:true,
},      
  "totalFee":{ 
    type:String,
    required:true,
},
  "amountPaid":{ 
    type:String,
    required:true,
},
  "due":{ 
    type:String
},
 "installmentsPaid":{
  type:String
 }
  
});

var studentsdataModel=mongoose.model("details",studentSchema);
module.exports = studentsdataModel;