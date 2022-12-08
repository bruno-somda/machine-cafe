import mongoose from 'mongoose';


const coffeSchema = new mongoose.Schema({
   
    water:{type:Number,default:0.0,required:true},
    milk:{type:Number,default:0.0,required:true},
    coffee:{type:Number,default:0.0,required:true},
    sugar:{type:Number,default:0.0,required:true},
    chocolate:{type:String,required:true},
    price:{type:Number,default:0.0,required:true}
},{
    timestamps:true
});
const coffeModel = mongoose.model("CoffeMachine",coffeSchema);

export default coffeModel;