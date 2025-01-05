import express from "express";
import activitiesController from "/controllers/activitiesController.js";
const router = express.Router();

router.get("/a", activitiesController.getAllActivities);
router.post("/", activitiesController.createActivity);
router.get("/:id", activitiesController.getActivityById);

export default router;
