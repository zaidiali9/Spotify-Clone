import { Schema, model , models } from "mongoose";


const PlaylistSchema = new Schema({
    Name: String,  // Playlist Name
    userid: String,
    list: [{
        title: String,
        Album: String,
        Duration: Number,
        uri: String,
    }]
})


const playlist = models.PlaylistSchema || model('recentlyplayeds', PlaylistSchema)

