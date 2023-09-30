import { Survivor } from "../models/survivor";

const db = require('../../db.json');

export const repository = {
    getAllSurvivors: (): Survivor[] => {
        return db.survivors;
    },
    saveSurvivor: (survivor: Survivor) => {

    }
};

export default repository;