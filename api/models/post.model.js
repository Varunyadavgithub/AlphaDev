import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
            unique:true,
        },
        image:{
            type:String,
            default:"https://cdn.pixabay.com/photo/2018/05/08/15/28/blog-3383287_1280.jpg",
        },
        category:{
            type:String,
            default:"uncategorized",
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
    },{timestamps:true}
);

export const Post=mongoose.model("Post",postSchema);
