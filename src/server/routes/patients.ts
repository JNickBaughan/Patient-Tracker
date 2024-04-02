import express, { Request, Response } from 'express';
import { PatientSlim, PatientDetails } from '../../common/types/types';
const router = express.Router();

router.post('/', (_: Request, res: Response<PatientSlim[]>)  => {
    res.send([
        { id: 15, firstName: "Nick", lastName: "Baughan", photoUrl: "" },
        { id: 87, firstName: "Peter", lastName: "Griffin", photoUrl: "" },
        { id: 74, firstName: "Glen", lastName: "Quagmire", photoUrl: "" },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "" }
    ]);
});

router.get('/:id', (req: Request, res: Response<PatientDetails>)  => {
    const { id } = req.params;
    //TODO: make mock database and lookup real contact 
    res.send({ id: 15, firstName: "Nick!", lastName: "Baughan", photoUrl: "" });
});

export default router;
  