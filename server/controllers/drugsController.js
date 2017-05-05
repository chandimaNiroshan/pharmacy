/**
 * Created by cniroshan on 5/3/2017.
 */

var restful = require('node-restful');
module.exports=function (app,route) {
    var rest = restful.model('drugs',app.models.drugs
    ).methods(['get','put','post','delete']);
    rest.register(app,route);

    return function (req,res,next) {
        next();
    };
};