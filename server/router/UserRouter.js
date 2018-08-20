const AbstractRouter = require('./AbstractRouter');
const users = require('../dummyData/users');

class UserRouter extends AbstractRouter{
    get(req,res){
        const userName = req.query.userName.toLowerCase();
        let response;
        if(users[userName]){
            if (req.query.allDetails) {
                response = users[userName];
            } else {
                response = users[userName].briefDetails;
            }
        } else {
            response = {
                message: 'user not found'
            }
        }
        res.json(response);
    }
}

module.exports = UserRouter;