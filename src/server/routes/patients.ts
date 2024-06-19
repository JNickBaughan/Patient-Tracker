import express, { Request, Response } from 'express';
import { PatientSlim, PatientDetails } from '../../common/types/types';
const router = express.Router();

router.post('/', (_: Request, res: Response<PatientSlim[]>)  => {
    res.send([
        { id: 96, firstName: "George", lastName: "Washington", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1024px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg", age: 45 },
        { id: 96, firstName: "John", lastName: "Jay", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/John_Jay_%28Gilbert_Stuart_portrait%29.jpg/1024px-John_Jay_%28Gilbert_Stuart_portrait%29.jpg", age: 45 },
        { id: 96, firstName: "Thomas", lastName: "Jefferson", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg", age: 45 },
        { id: 96, firstName: "Daniel", lastName: "Shay", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Daniel_Shays_%28Shays%27_Rebellion%29.jpg", age: 45 },
        { id: 96, firstName: "Benjamin", lastName: "Franklin", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg/1024px-Joseph_Siffrein_Duplessis_-_Benjamin_Franklin_-_Google_Art_Project.jpg", age: 45 }, 
        { id: 96, firstName: "Alexander", lastName: "Hamilton", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/John_Trumbull_-_Alexander_Hamilton_-_Google_Art_Project.jpg/1024px-John_Trumbull_-_Alexander_Hamilton_-_Google_Art_Project.jpg", age: 45 },
        { id: 96, firstName: "John", lastName: "Adams", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg/1024px-Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg", age: 65 }
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
  