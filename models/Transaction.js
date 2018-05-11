const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema({

  users1: [{type: Schema.Types.ObjectId, ref:'Account'}],
  users2: [{type: Schema.Types.ObjectId, ref:'Account'}],
  amaunt: [{type: Number, required: true }]
});

module.exports = mongoose.model('Transaction', TransactionSchema);
