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
    res.send({ id: 15
        ,firstName: "Nick!"
        ,lastName: "Baughan"
        ,photoUrl: ""
        ,stats: [
             { date: "2024-01-01", heartRate: 72, diastolic: 80, systolic: 124 }
            ,{ date: "2024-02-11", heartRate: 72, diastolic: 78, systolic: 119 }
            ,{ date: "2024-04-07", heartRate: 74, diastolic: 82, systolic: 118 }
        ] 
    });
});

export default router;
  