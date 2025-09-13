const { GetAllTasks, AddTask, UpdateTask } = require("../controllers/tasks.controller");

function tasksRouter (express) {

    const router = express.Router();

    router.get('/', GetAllTasks)
    router.post('/', AddTask)
    router.put('/:id', UpdateTask)

    return router;

}

module.exports = tasksRouter;