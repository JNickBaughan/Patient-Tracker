import express, { Request, Response } from 'express';
import { PatientSlim } from '../../common/types/types';
const router = express.Router();

router.post('/', (_: Request, res: Response<PatientSlim[]>)  => {
    res.send([
        { id: 15, firstName: "Nick", lastName: "Baughan", photoUrl: "" },
        { id: 87, firstName: "Peter", lastName: "Griffin", photoUrl: "" },
        { id: 74, firstName: "Glen", lastName: "Quagmire", photoUrl: "" },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "" }
    ]);
});

export default router;
  