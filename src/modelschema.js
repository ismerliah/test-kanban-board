export const ColumnSchema = new Schema({
    columnId: { type: String, required: true },
    columnName: { type: String, required: true },
    task: [TaskSchema],
});

export const TaskSchema = new Schema({
    taskId: { type: String, required: true },
    taskName: { type: String, required: true },
    taskDescription: { type: String, required: true },
});