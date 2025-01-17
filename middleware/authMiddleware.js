export const checkAuth = async (req, res, next)=>{
console.log("authMiddleware")
next();
}