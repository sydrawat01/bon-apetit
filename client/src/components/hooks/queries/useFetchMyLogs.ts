import { useQuery } from 'react-query'
import { fetchMyLogs } from '../../../services/logs'
import { LogEntryDoc } from '../../../models/LogEntry'

const useFetchMyLogs = () => {
  return useQuery<LogEntryDoc[]>('myLogs', fetchMyLogs)
}

export default useFetchMyLogs
