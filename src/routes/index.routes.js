import { Router } from 'express';

import gamesRouter from '../modules/games/teams.routes.js';

const indexRouter = Router();

indexRouter.use("/games", gamesRouter);

export default indexRouter;