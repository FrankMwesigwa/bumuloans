import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    enteredBy:{
        type:String,
        required:false
    },
    author:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:null
    },
    pages:{
        type:String,
        default:null
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    price:{
        type:String,
        default:null
    },
},{timestamps:true})


export default mongoose.model('Book', bookSchema);