import React, { useState } from "react";
import { createTodo, deleteTodo } from "../api/todo";

type Todo = {
  id: number;
  title: string;
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
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoPage
