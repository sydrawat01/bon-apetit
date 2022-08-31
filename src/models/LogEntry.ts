import mongoose, { Document } from 'mongoose'
import User, { UserInterface } from './User'

interface LogEntry extends Document {
  title: string
  description: string
  comments: string
  rating: number
  latitude: number
  longitude: number
  visitDate: Date
  createdAt: Date
  updatedAt: Date
  user: UserInterface
}

const requiredNumber = {
  type: Number,
  required: true,
}
/**
 * LOG-ENTRY SCHEMA
 */
const logEntrySchema = new mongoose.Schema<LogEntry>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: String,
    comments: String,
    rating: {
      type: Number,
      min: [0, 'Minimum should be 0'],
      max: [5, 'Maximum should be 5'],
      default: 0,
    },
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      type: Date,
      required: [true, 'Visit Date is required'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const LogEntry = mongoose.model<LogEntry>('LogEntry', logEntrySchema)
export default LogEntry
