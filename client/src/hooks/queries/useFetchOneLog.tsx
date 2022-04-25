import { useQuery } from 'react-query'
import { fetchOneLog } from '../../services/logs'
import { LogEntryDoc } from '../../models/LogEntry'

export default function useFetchOneLog(logId: any) {
  return useQuery<LogEntryDoc>(['oneLog', logId], () => fetchOneLog(logId))
}
