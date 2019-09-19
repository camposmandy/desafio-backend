import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const clientSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a name',
  },
  documentNumber: {
    type: String,
    required: 'Enter cpf document number',
  },
  birthDate: {
    type: Date,
    required: 'Enter cpf document number',
  },
});
