/**
 * Created by cniroshan on 5/3/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drugsSchema = new Schema({
    name:String,
    colour:String,
    origin:String
});

module.exports=drugsSchema;