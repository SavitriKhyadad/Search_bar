import { Router } from 'express';
import {main} from './main.controller';
import {main1} from './main.controller1';
//import { occupationData } from '../occupation-data/occupation_.js';

export const mainRouter = Router();

mainRouter.route('/:jobrole').post(main);           //Takes jobrole as input querry for filtering
mainRouter.route('/').post(main1); 
