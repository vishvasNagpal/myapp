const AbstractRouter = require('./AbstractRouter');

class HomeRouter extends AbstractRouter{
    get(req,res){
        res.json({name: 'vishvas'});
    }
}

module.exports = HomeRouter;