import express, { Request, Response } from 'express';
import { PatientSlim, PatientDetails } from '../../common/types/types';
const router = express.Router();

router.post('/', (_: Request, res: Response<PatientSlim[]>)  => {
    res.send([
        
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "", age: 45 },
        { id: 96, firstName: "Homer", lastName: "Simpson", photoUrl: "//upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png", age: 45 },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "//upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png", age: 45 },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "", age: 45 },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "", age: 45 },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "", age: 45 },
        { id: 96, firstName: "Bart", lastName: "Simpson", photoUrl: "", age: 45 }
    
    ]);
});

router.get('/:id', (req: Request, res: Response<PatientDetails>)  => {
    const { id } = req.params;
    //mock slow network
    setTimeout(() => {
        //TODO: make mock database and lookup real contact 
        res.send({ id: 15
            ,firstName: "Nick"
            ,lastName: "Baughan"
            , photoUrl: "", age: 45 
            ,stats: [
                { date: "2023-09-03", heartRate: 49, diastolic: 82, systolic: 117 }
                ,{ date: "2023-11-11", heartRate: 78, diastolic: 82, systolic: 128 }
                ,{ date: "2024-02-11", heartRate: 73, diastolic: 78, systolic: 119 }
                ,{ date: "2023-12-03", heartRate: 85, diastolic: 82, systolic: 118 }
                ,{ date: "2024-01-01", heartRate: 79, diastolic: 80, systolic: 125 }
                ,{ date: "2024-04-07", heartRate: 92, diastolic: 82, systolic: 121 }
                ,{ date: "2024-04-07", heartRate: 74, diastolic: 81, systolic: 122 }
                ,{ date: "2022-09-10", heartRate: 80, diastolic: 78, systolic: 125 }
                ,{ date: "2023-11-11", heartRate: 78, diastolic: 82, systolic: 128 }
                ,{ date: "2024-02-11", heartRate: 73, diastolic: 78, systolic: 119 }
                ,{ date: "2023-12-03", heartRate: 85, diastolic: 82, systolic: 118 }
                ,{ date: "2024-01-01", heartRate: 79, diastolic: 80, systolic: 125 }
                ,{ date: "2024-04-07", heartRate: 92, diastolic: 82, systolic: 121 }
                ,{ date: "2024-04-07", heartRate: 74, diastolic: 81, systolic: 122 }
                ,{ date: "2022-09-10", heartRate: 80, diastolic: 78, systolic: 125 }
                ,{ date: "2023-11-11", heartRate: 78, diastolic: 82, systolic: 128 }
                ,{ date: "2024-02-11", heartRate: 73, diastolic: 78, systolic: 119 }
                ,{ date: "2023-12-03", heartRate: 85, diastolic: 82, systolic: 118 }
                ,{ date: "2024-01-01", heartRate: 79, diastolic: 80, systolic: 125 }
                ,{ date: "2024-04-07", heartRate: 92, diastolic: 82, systolic: 121 }
                ,{ date: "2024-04-07", heartRate: 74, diastolic: 81, systolic: 122 }
                ,{ date: "2022-09-10", heartRate: 80, diastolic: 78, systolic: 125 }
            ] 
        });
    }, 1500)

});

export default router;
  