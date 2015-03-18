var express = require('express');
var url = require('url');
var router = express.Router();


/* construct links for all routes in our app */
router.use(function(req,res,next){
    var links = [];
    for(var i=0; i< router.stack.length; i++) {
        var route = router.stack[i]['route'];
        if( route !== undefined
            && route.path !=='/favicon.ico'){
            var name  = (route.path !=='/')? route.path.toLowerCase().replace('/','').capitalize() : "Home";
            var active = (route.path === url.parse(req.originalUrl).pathname);

            links.push({
                name: name,
                path: route.path,
                active: active
            });
        }
    }
    if(links.length > 0) {
        res.locals.appLinks = links;
    }
    next();
});



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Pi-face', siteDesc: 'A web interface for my home server'});
});

router.get('/about',function(req, res, next) {
    res.render('about');
});

router.get('/dashboard',function(req,res,next) {
    res.render('dashboard');
});

router.get('/game',function(req,res,next) {
   res.render('game');
});

router.get('/weather',function(req,res,next) {
    res.render('weather');
})

module.exports = router;