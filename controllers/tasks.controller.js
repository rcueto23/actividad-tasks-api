let tasks = [
    { id: 1, tarea: 'Pasear al perro' },
    { id: 2, tarea: 'Lavar los platos' }
];

module.exports = {

    GetAllTasks: (request, response) => {
        response.json(tasks);
    },

    AddTask: (request, response) => {
        const newTask = request.body;
        const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
        const tareaConId = { id: newId, tarea: newTask.tarea };
        tasks.push(tareaConId);
        response.json(tareaConId);
    },

    UpdateTask: (request, response) => {
        const id = parseInt(request.params.id);
        const tareaActualizada = request.body;
        const index = tasks.findIndex(t => t.id === id);
        if (index !== -1) {
            tasks[index] = { ...tasks[index], ...tareaActualizada };
            response.json({ mensaje: `Tarea ${id} actualizada`, tarea: tasks[index] });
        } else {
            response.status(404).json({ mensaje: 'Tarea no encontrada' });
        }
    },

}