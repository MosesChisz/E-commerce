import { types } from "mime-types";

const { Schema, model, models, default: mongoose } = require("mongoose");

const CategorySchema = new Schema({
    name: {type:String,required:true},
    parent: {type:mongoose.Types.ObjectId, ref:"Category"},
    properties: [{type:Object}]
})

export const Category = models?.Category || model("Category", CategorySchema);