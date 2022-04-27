import jwt from 'jsonwebtoken'
import { UserInterface } from '../models/User'
/**
 * JWT SECRET TOKEN
 */
const { JWT_SECRET } = process.env
/**
 * FUNCTION TO HANDLE JWT TOKEN
 */
export function setToken(user: UserInterface) {
  return jwt.sign({ userId: user._id }, JWT_SECRET!, {
    expiresIn: '7d',
  })
}
/**
 * VERIFY JWT TOKEN
 */
export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET!)
}
