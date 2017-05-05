/**
 * Created by cniroshan on 4/30/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    name:String,
    function:String,
    email:String
});

module.exports=usersSchema;