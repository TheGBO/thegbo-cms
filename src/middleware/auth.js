const suc = require('../utils/responseutils');

const auth = (req, res, next) => {
    if(req.body.token == process.env.AUTHTOKEN){
        return next();
    }
    return res.status(401).json(suc(false, {}, "Authorization failed"));
}

module.exports = auth;