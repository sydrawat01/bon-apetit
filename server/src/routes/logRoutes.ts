import { Router } from 'express'
import {
  addLog,
  deleteLog,
  fetchAllLogs,
  fetchMyLogs,
  fetchOneLog,
} from '../controllers/logControllers'
import isAuth from '../middlewares/isAuth'

const router = Router()
/**
 * ROUTES FOR LOGS
 */
router.get('/me', isAuth, fetchMyLogs)
router.post('/', isAuth, addLog)

router.get('/all', fetchAllLogs)
router.get('/:id', fetchOneLog)
router.delete('/:id', isAuth, deleteLog)

export default router
