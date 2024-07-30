import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}



export default function TodoSummary({ todos,deleteAllCompleted }: TodoSummaryProps){
    const completedTodos = todos.filter(todo => todo.completed);
    return(
        <div className="text-center space-y-2">
            <p className="text-sm font-medium text-white">
                {completedTodos.length}/{todos.length} Todos Completed
            </p> 
            {completedTodos.length > 0 &&( <button className="text-sm text-red-500 hover:underline" onClick={deleteAllCompleted}>Delete All Completed</button>)}
        </div>
    )
}
  
