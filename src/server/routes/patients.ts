import express, { Request, Response } from 'express';
const router = express.Router();

router.post('/', (_: Request, res: Response)  => {
    res.send([{ firstName: "Nick", lastName: "Baughan" },
                { firstName: "Nick", lastName: "Baughan" },
                { firstName: "Nick", lastName: "Baughan" },
                { firstName: "Nick", lastName: "Baughan" },
                { firstName: "Nick", lastName: "Baughan" },
                { firstName: "Nick", lastName: "Baughan" }
            ]);
});

export default router;
  