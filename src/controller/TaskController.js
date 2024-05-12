
const tasksModel=require('../model/taskModel')

exports.Create=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let reqBody=req.body;
        reqBody.email=email;
        await tasksModel.create(reqBody);
        res.json({status:"success",message:"Create Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
exports.Update=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let {id}=req.params
        let reqBody=req.body;
        await tasksModel.updateOne({_id:id,email:email},reqBody);
        res.json({status:"success",message:"Update Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
exports.Read=async (req,res)=>{
    try{
        let email=req.headers['email'];

        let data=await tasksModel.find({email:email});
        res.json({status:"success",data:data})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.delete=async (req,res)=>{
    try{
        let email=req.headers['email'];
        let {id}=req.params
        await tasksModel.deleteOne({_id:id,email:email});
        res.json({status:"success",message:"Delete Completed"})

    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
exports.complete=async(req,res)=>{
    let email=req.headers['email'];
    let {id}=req.params;
    const {complete}=req.body;
    try{
        const task = await tasksModel.updateOne(
            id,
            {email:email},
            {complete},
            {new:true}
        )
        res.json(task)

        }
        catch(error){
            res.json({status:"fail",message:error})
        }
    

}

