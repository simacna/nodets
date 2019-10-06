var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
{
  first_name: {type: String, required, true, max: 100},
  last_name: {type: String, required: true, max: 100},
  date_of_birth: {type: Date},
  date_of_date: {type, Date},
}
  );

//virtual for author's full name
AuthorSchema
  .virtual('name')
  .get(function(){
    return this.family_name + ' ' + this.first_name
  });

//virtual for author's lifespan
AuthorSchema
  .virtual('lifespan')
  .get(()=>{
    return(this.date_of_birth.getYear() - this.date_of_birth.getYear()).toString()
  })

//virtual for author's URL
AuthorSchema
  .virtual('url')
  .get(function(){
    return '/catalog/author/' + this._id;
  });

//export model
module.exports = mongoose.module('Author', AuthorSchema);