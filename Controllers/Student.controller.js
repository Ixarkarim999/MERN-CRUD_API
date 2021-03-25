
const Student=require('../Models/Student.model');

exports.test=(req,res)=>{
    res.send("This is a test controller");
}

exports.Student_create=(req,res)=>{
    let student = new Student
    ({
      Name:req.body.Name,
      DOB:req.body.DOB,
      Section:req.body.Section,
      Department:req.body.Department,
      GPA:req.body.GPA
    });
    

    student.save((err)=>{
        if(err)
        {
            return next(err);
        }
        res.send('Student added Successfully')
    }); 
} 


exports.Student_search=(req,res)=>{
    Student.findById(req.params.id,(err,student)=>{
        if(err)
        return next(err)
        res.send(student)
    })
}

exports.Student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set:req.body},(err,student)=>{
        if (err)
        return next(err);
        res.send('Student info Updated')
    })
}

exports.Student_Delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if(err)
        
        return next(err);
            res.send('Student removed successfully');
        }
    
    )
}