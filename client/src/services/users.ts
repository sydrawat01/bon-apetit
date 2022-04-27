import axios, { AxiosResponse } from 'axios'
import { API_URL } from '../config'
import { ResError } from '../models/Error'
import { AuthResponse, UserDoc } from '../models/User'
/**
 *  DEFINITION FOR LOGIN DATA
 */
type LoginData = {
  username: string
  password: string
}
/**
 * DEFINITION FOR REGISTER DATA
 */
type RegisterData = LoginData & {
  fullName: string
  email: string
}

/**
 * LOGIN
 */
export const loginUser = async (loginData: LoginData) => {
  const res = await axios.post<LoginData, AxiosResponse<AuthResponse>>(
    `${API_URL}/api/users/login`,
    loginData
  )
  return res.data
}
/**
 * REGISTER USER
 */
export const registerUser = async (registerData: RegisterData) => {
  const res = await axios.post<
    RegisterData,
    AxiosResponse<ResError & { ok: boolean }>
  >(`${API_URL}/api/users/register`, registerData)
  return res.data
}

export async function loadUser() {
  const res = await axios.get<never, AxiosResponse<{ user: UserDoc }>>(
    `${API_URL}/api/users/me`
  )
  return res.data
}
