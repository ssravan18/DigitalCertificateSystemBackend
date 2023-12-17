const onlyUser = (req, res, next) => {
    const {role} = req.body.jwTokenData;
    if(role === "user") next();
    else{
        return res.status(403).json({
            message : "unauthorized!"
        });
    }
}

module.exports = {onlyUser};