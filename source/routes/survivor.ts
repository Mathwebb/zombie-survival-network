import express from "express";
import controller from "../controllers/survivor";

const router = express.Router();

router.get('/survivors', controller.getAllSurvivors);

export = router;
