module.exports = {
    auth: (req, res, next) =>{
        if (req.isAuthenticated()){
            return next();
        }
        res.render('index', {message: "You are not logged in", login: ""});
    }
}