import { Router } from 'express';
import { mainRouter } from '../resources/main/main.router';


export const router = Router();

router.use('/main', mainRouter);
