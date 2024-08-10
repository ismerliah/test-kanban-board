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