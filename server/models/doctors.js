/**
 * Created by cniroshan on 5/3/2017.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorsSchema = new Schema({
    name:String,
    nic:String,
    age:String,
    specialization:String
});

module.exports=doctorsSchema;