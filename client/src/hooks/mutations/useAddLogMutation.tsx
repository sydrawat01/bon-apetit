import { useMutation } from 'react-query'
import { addLogEntry } from '../../services/logs'

/**
 *
 * USER ADD LOG MUTATIONS HOOKS
 */
export default function useAddLogMutation() {
  return useMutation(addLogEntry)
}
