const AbstractRouter = require('./AbstractRouter');

class UserRouter extends AbstractRouter{
    get(req,res){
        let user = {}
        switch ((req.query.useName).toLowerCase()) {
            case 'vishvas' :
                user = {
                    firstName: 'Vishvas',
                    lastName: 'Nagpal',
                    work: {
                        companyName: 'Walmart Labs',
                        position: 'Engineer 3',
                    },
                    profileViews: {
                        count: 121,
                    }
                }
                break;
            case 'preeti' :
                user = {
                    firstName: 'Preeti',
                    lastName: 'Hans',
                    work: {
                        companyName: 'Josh Technologies',
                        position: 'Sr. Software Engineer',
                    },
                    profileViews: {
                        count: 121,
                    }
                }
                break;

            default :
                user = {
                    message: 'User not found',
                }
                break;
        }

        res.json(user);
    }
}

module.exports = UserRouter;