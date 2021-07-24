export default func => {
    return async (req,res,next) => {
        try{
            await func(req,res);
        }
        catch (e) {
            console.log(e.message);
            next(e);
        }

    }

}