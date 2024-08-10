import { useLocalStorage } from "@vueuse/core";
import { v4 as uuidv4 } from 'uuid';

const BOARD = useLocalStorage("kanban-board", [])

export { BOARD };

export function addColumn(name) {
    BOARD.value.push({
        columnId: uuidv4(),
        name,
        tasks: [],
    });
}

export function addTaskToColumn(columnId, taskName, taskDescription) {
    const column = BOARD.value.find((column) => column.columnId === columnId);
    column.tasks.push({
        taskId: uuidv4(),
        taskName,
        taskDescription,
    });
}

export function deleteColumn(columnId) {
    BOARD.value = BOARD.value.filter((column) => column.columnId !== columnId);
}

export function deleteTask(columnId, taskId) {
    const column = BOARD.value.find((column) => column.columnId === columnId);
    if (column) {
        column.tasks = column.tasks.filter((task) => task.taskId !== taskId);
    }
}