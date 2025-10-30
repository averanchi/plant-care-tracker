export type TaskType = "WATER" | "MIST" | "FERTILIZE";
export type Task = { id: string; plantName: string; type: TaskType; dueAt: string; };
