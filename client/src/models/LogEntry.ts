import { UserDoc } from './User'
/**
 * LOG-ENTRY MODEL FOR REVIEW
 */
export type LogEntry = {
  title: string
  description?: string
  comments: string
  rating: number
  latitude: number
  longitude: number
  visitDate: string
  user?: UserDoc
}

export type LogEntryDoc = LogEntry & { _id: string }
