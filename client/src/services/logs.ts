import axios, { AxiosResponse } from 'axios'
import { NormError, ResError } from '../models/Error'
import { LogEntry, LogEntryDoc } from '../models/LogEntry'

//Queries

/**
 * FETCH ALL LOGS (REVIEWS)
 */
export const fetchAllLogs = async () => {
  const res = await axios.get<LogEntryDoc[]>('/logs/all')
  return res.data
}

/**
 * FETCH PARTICULAR USER LOG
 */
export async function fetchMyLogs() {
  const res = await axios.get<LogEntryDoc[]>('/logs/me')
  return res.data
}

/**
 * FETCH PARTICULAR LOG
 */
export async function fetchOneLog(id: string) {
  const res = await axios.get<LogEntryDoc>(`/logs/${id}`)
  return res.data
}

// Mutations

/**
 * ADD LOG ENTRY
 */
export const addLogEntry = async (logData: LogEntry) => {
  const res = await axios.post<LogEntry, AxiosResponse<LogEntryDoc & ResError>>(
    '/logs',
    logData
  )
  return res.data
}
/**
 * DELETE LOG ENTRY
 */
export const deleteLogEntry = async (logId: string) => {
  const res = await axios.delete<NormError>(`/logs/${logId}`)
  return res.data
}
