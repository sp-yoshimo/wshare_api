const mongoose=require("mongoose");

const MapSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    url:{
        type:String,
        required:true,
        trim:true,
    },
    content:{
        type:String,
        required:true,
        trim:true,
    }
})

const Map=mongoose.model("Map",MapSchema);

module.exports=Map;  