import { Survivor } from "../models/survivor";
import repository from "../repositories/survivor";

export const service = {
    getAllSurvivors: (): Survivor[] => {
        return repository.getAllSurvivors();
    }
};

export default service;
