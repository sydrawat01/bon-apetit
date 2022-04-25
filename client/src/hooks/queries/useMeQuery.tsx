import { useQuery } from 'react-query'
import { loadUser } from '../../services/users'
import { UserDoc } from '../../models/User'

export default function useMeQuery() {
  return useQuery<{ user: UserDoc }>('me', loadUser)
}
