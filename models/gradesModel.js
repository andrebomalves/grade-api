import mongoose from 'mongoose';

const gradesSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    subject: { type: String, require: true },
    type: { type: String, require: true },
    value: { type: Number, require: true },
    lastModified: { type: Date, default: Date.now() }
  }
);

gradesSchema.set('toJSON', { getters: true, virtuals: true });

gradesSchema.virtual('id').get( function() { return this._id});

export default mongoose.model('grades', gradesSchema,'grades');
