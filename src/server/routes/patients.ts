import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/', (_: Request, res: Response)  => {
    res.send([
                { id: 15, firstName: "Nick", lastName: "Baughan" },
                { id: 12, firstName: "Nick", lastName: "Baughan" },
                { id: 51, firstName: "Nick", lastName: "Baughan" },
                { id: 144, firstName: "Nick", lastName: "Baughan" },
                { id: 16, firstName: "Nick", lastName: "Baughan" },
                { id: 17, firstName: "Nick", lastName: "Baughan" }
            ]);
});

export default router;
  