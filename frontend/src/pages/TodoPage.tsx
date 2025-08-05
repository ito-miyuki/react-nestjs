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
    const [search, setSearch] = useState<string>("");
  
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

    const filteredList = list.filter((todo) =>
      todo.title.toLowerCase().includes(search.toLowerCase())
    )

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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
        <h1 className="text-2xl font-bold text-blue-600 mb-6">
          {`Hi, ${user.name}! What To-Do today?`}
        </h1>
        <form onSubmit={handleAdd} className="w-full max-w-md flex gap-2 mb-6">
          <input
          id="todo-input"
          type="text"
          value={todo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="w-full max-w-md">
            <ul className="space-y-3">
            {filteredList.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between bg-white shadow-sm rounded px-4 py-2"
                >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleToggle(item.id, !item.completed)}
                    className="h-4 w-4"
                  />
                  <span
                    className={`${
                      item.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700 text-lg"
                  >
                    ×
                </button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default TodoPage
