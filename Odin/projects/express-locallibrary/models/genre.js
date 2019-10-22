var mongoose = reqiure('mongoose');
var Schema = mongoose.Schema;

var GenreSchema = new Schema({
  name: {type: String, required: true, max: 100, min:3},
});

GenreSchema
  .virtual('url')
  .get(()=>{
    return '/catalog/genre' + this._id;
  });

module.exports = mongoose.model('genre', GenreInstance);