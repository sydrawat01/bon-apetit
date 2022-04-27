import { useMutation } from 'react-query'
import { deleteLogEntry } from '../../services/logs'

/**
 *
 * DELETE HOOKS
 */
export default function useDeleteLogMutation() {
  return useMutation(deleteLogEntry)
}
