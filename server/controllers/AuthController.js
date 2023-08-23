import getPrismaInstance from "../utils/PrismaClient";

export const checkUser = async (req,res,next)=>{
    try {
        const {email} = req.body;
        if(!email){
            return res.json({msg: "Email is required.", status:false})
        }
        const prisma = getPrismaInstance();
        const user = await prisma.user.findUnique({where:{email}});
    } catch (error) {
        next(error)
    }
}