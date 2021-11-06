export interface RedaxState {
  toDo: StateType;
}

export interface StateType {
  tasks: TaskItem[];
  tasksDone: TaskItem[];
}

export interface TaskItem {
  id: number;
  name: string;
  description: string;
  date: number;
}
