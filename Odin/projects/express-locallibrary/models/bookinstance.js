var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema({
  book: {type: Schema.Types.ObjectId, ref: 'Book', required: true},
  imprint: {type: String, required: true},
  status: {type: String, required: true,  enum: ['Available', 'Maintanence', 'Loaned', 'Reserved'], default: 'Maintenance'},
  due_back: {type: Date, default: Date.now}
});

//virtual for bookinstance's url
BookInstanceSchema
  .virtual('url')
  .get(()=>{
    return '/catalog/bookinstance' + this._id;
  });

  module.exports = mongoose.model('BookInstance', BookInstanceSchema);
  