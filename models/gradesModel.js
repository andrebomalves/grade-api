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

export default mongoose.model('grades', gradesSchema,'grades');
