import { Router } from 'express';
import SessionsController from '../controllers/SessionsController';

const sessionsRouter = Router();
const sessionsCrontoller = new SessionsController();

sessionsRouter.post('/', sessionsCrontoller.create);

export default sessionsRouter;
