const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let Studentschema=new Schema({
 Name:{type:String,required:true,max:100},
 DOB:{type:Date},
 Section:{type:String},
 Department:{type:String},
 GPA:{type:Number}
});
module.exports=mongoose.model('Student',Studentschema);