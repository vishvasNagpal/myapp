const AbstractRouter = require('./AbstractRouter');
const feed = require('../dummyData/feed');

class FeedRouter extends AbstractRouter{
    get(req,res){
        const feedInfo = {
            currentPage: req.query.currentPage || 1,
            perPage: req.query.perPage || 10,
        }
        res.json(feed);
    }
}

module.exports = FeedRouter;