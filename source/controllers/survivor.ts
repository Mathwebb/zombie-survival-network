import service from "../services/survivor";
import { Request, Response, NextFunction } from "express";

const controller = {
    getAllSurvivors: (req: Request, res: Response, next: NextFunction) => {
        return res.json(service.getAllSurvivors()).status(200);
    }
}

export default controller;
