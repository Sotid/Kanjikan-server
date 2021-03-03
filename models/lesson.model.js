const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
    name: {type: String},
    img: {type: String},
    kanji:[{type: Schema.Types.ObjectId,ref:'Kanji'}]
});


const Lesson = mongoose.model('Lesson', lessonSchema);
