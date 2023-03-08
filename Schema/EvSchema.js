const mongoose=require('mongoose');

const EVSchema=new mongoose.Schema({
    name:String,
    image:String,
    pricing:Number,
    address:String
});

const evs=mongoose.model('Ev',EVSchema);
module.exports=evs;