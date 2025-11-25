const express = require('express');
const {createTask, getAllTasks, getTasksById} = require('../controllers/taskController');

const router = express.Router();
router.post("/",createTask);
router.get("/",getAllTasks);
router.get("/:id",getTasksById);

module.exports = router;