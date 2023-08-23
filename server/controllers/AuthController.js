import getPrismaInstance from "../utils/PrismaClient";

export const checkUser = (req,res,next)=>{
    try {
        const {email} = req.body;
        if(!email){
            return res.json({msg: "Email is required.", status:false})
        }
        const prisma = getPrismaInstance();
    } catch (error) {
        next(error)
    }
}