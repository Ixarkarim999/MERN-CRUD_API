const express=require('express')
const router=express.Router();


const student_controller=require('../Controllers/Student.controller');

router.get('/test',student_controller.test);
router.post('/create',student_controller.Student_create);
router.get('/:id/search',student_controller.Student_search);
router.put('/:id/update',student_controller.Student_update);
router.delete('/:id/delete',student_controller.Student_Delete);

module.exports=router;

