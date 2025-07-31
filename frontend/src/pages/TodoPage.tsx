import React, { useState } from "react";
import { createTodo, deleteTodo, updateTodo } from "../api/todo";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoPage = ({ user }: { user: { id: number; name: string } }) => {
    const [todo, setTodo] = useState("");
      const [list, setList] = useState<Todo[]>([]);
    
      const handleAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!todo) return;

        try {
          const newTodo = await createTodo({ title: todo, userId: user.id });
          setList([...list, newTodo]);
          setTodo("");
        } catch (err) {
          console.error("Failed to create todo", err);
        }
      }

      const handleDelete = async (id: number) => {
        await deleteTodo(id);
        setList(list.filter((item) => item.id != id));

      }

      const handleToggle = async (id: number, completed: boolean) => {
        try {
          await updateTodo(id, { completed });

          setList(
            list.map((item) =>
              item.id === id ? { ...item, completed } : item
            )
          );
        } catch (err) {
          console.error("Failed to toggle todo", err);
        }
      };

  return (
    <div>
        <h1>{`Hi, ${user.name}! What To-Do today?`}</h1>
        <form onSubmit={handleAdd}>
            <label htmlFor="todo-input">Add to-do:</label>
            <input
            id="todo-input"
            type="text"
            value={todo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
        <div className="list-container">
            <ul>
            {list.map((item, i) => (
                <li key={i}>
                  {item.title}
                  <button onClick={() => handleDelete(item.id)}>×</button>
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(item.id, !item.completed)} />
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoPage
