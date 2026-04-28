import express,{Router} from 'express';
const app=express();
const router=Router();
import students from '../data/student';

export const getDashboard=(req,res)=>{
    res.send("student Dashboard");
    // detault error handling
    throw new console.error("something went wrong");
    throw new Error("something not working")
    

}

export const getStudent=(req,res,err)=>{
    const studentId=req.params.studentId;
    const student =students.find(s=>s.id===studentId);
    if(!student){
        // custom error handling
        console.log(err);
        return res.status(404).json({message:'student ID is required'});
    }

res.json(students)
}
export const getAllStudent=(req,res,next)=>{
    res.json(students);
    // passing error into next ()
    next( new Error("failed to load all students"))
}