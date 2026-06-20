import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    pinned: {
      type: Boolean,
      default: false
    },
    archived: {
      type: Boolean,
      default: false
    },
    trashed: {
      type: Boolean,
      default: false
    },
    labels: [
      {
        type: String
      }
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Note', noteSchema);