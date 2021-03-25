const express=require('express')
const bodyParser = require('body-parser')
const student=require('./Routes/Student.route')
const mongoose=require('mongoose')



const app=express();

mongoose.connect('mongodb://localhost/StudentsDB',{useNewUrlParser:true, useUnifiedTopology:true})

.then(()=>{
console.log("Connection with database successful")
})
.catch((err)=>{
console.log("Connection failed!",err)
process.exit();
}
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/students',student)

app.listen(3000,()=>{
console.log('The server is running at port 3000')
});


