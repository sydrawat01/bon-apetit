import { AxiosError } from 'axios'

/**
 * AXIOS ERROR HANDLER
 */
export default function getAxiosError(error: unknown) {
  return ((error as AxiosError).response?.data as any) || (error as Error)
}
