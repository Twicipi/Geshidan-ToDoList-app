import { useEffect, useState } from "react";
import { dummyData } from "../data/todos";
import { Todo } from "../types/todo";

export default function useTodos() {
  
    const [todos, setTodos] = useState<Todo[]>(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : dummyData;
      });
    
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);
    
      function setTodoCompleted(id: number, completed: boolean) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
        );
      }
    
      function addTodo(title: string) {
        setTodos((prevTodos) => [
          ...prevTodos,
          {
            id: Date.now(),
            title: title,
            completed: false,
          },
        ]);
      }
    
      function deleteTodo(id: number) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    
      function deleteAllCompletedTodos() {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
      }

      return{
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompletedTodos
      }
    
}