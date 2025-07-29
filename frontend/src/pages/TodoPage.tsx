import React, { useState } from "react";

const TodoPage = ({ user }: { user: { name: string } }) => {
    const [todo, setTodo] = useState("");
      const [list, setList] = useState<string[]>([]);
    
      const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        if (!todo) return;
        setList([...list, todo]);
        setTodo("");
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
                <li key={i}>{item}</li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoPage
