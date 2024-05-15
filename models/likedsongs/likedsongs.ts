import { Schema, model , models } from "mongoose";


const likedsongsSchema = new Schema({
    uri: String,
    name: String,
    artist: String,
    album: String,
    duration: Number
})  

const likedsongs = models.liked || model('liked', likedsongsSchema)

export default likedsongs;
