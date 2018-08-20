const AbstractRouter = require('./AbstractRouter');

class FeedRouter extends AbstractRouter{
    get(req,res){

        if((req.query.useName) === 'vishvas') {

        }


        res.json({
            firstName: 'Vishvas'
        });
    }
}

module.exports = FeedRouter;