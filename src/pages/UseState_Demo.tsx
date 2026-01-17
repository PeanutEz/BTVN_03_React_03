import { useState } from "react";
import './UseState_Demo.css';

interface Todo {
  id: number;
  status: "pending" | "done";
  title: string;
}

interface TodoInputProps {
  onAddTodo: (title: string) => void; 
}

function TodoInput({onAddTodo}: TodoInputProps) {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if(title.trim() === "") return;
    onAddTodo(title);
    setTitle("");
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleAdd();
  }

  return (
    <div className="todo-input-form">
      <input
        type="text"
        placeholder="Enter todo..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={handleKeyPress}
        className="todo-input"
      />
      <button onClick={handleAdd} className="btn btn-primary">
        Add
      </button>
    </div>
  )
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newTitle: string) => void;
}

function TodoItem({ todo, onToggle, onDelete, onUpdate }: TodoItemProps) {
  const handleUpdate = () => {
    const newTitle = window.prompt("Enter new title:", todo.title);
    if (newTitle && newTitle.trim() !== "") {
      onUpdate(todo.id, newTitle.trim());
    }
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure to delete this task?");
    if (isConfirmed) {
      onDelete(todo.id);
    }
  };

  return (
    <div className={`todo-item ${todo.status === 'done' ? 'done' : ''}`}>
      <input
        type="checkbox"
        checked={todo.status === 'done'}
        onChange={() => onToggle(todo.id)}
        className="todo-checkbox"
      />
      
      <div className={`todo-content ${todo.status === 'done' ? 'done' : ''}`}>
        {todo.title}
      </div>
      
      <div className="todo-actions">
        <button onClick={handleUpdate} className="btn btn-secondary">
          Edit
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}



export default function DemoUseState() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      status: "pending",
    }
    setTodos((prev) => [...prev, newTodo]);
  }

  const toggleTodo = (id: number) => {
    setTodos((prev) => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, status: todo.status === 'pending' ? 'done' : 'pending' }
          : todo
      )
    );
  }

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  }

  const updateTodo = (id: number, newTitle: string) => {
    setTodos((prev) => 
      prev.map(todo => 
        todo.id === id 
          ? { ...todo, title: newTitle }
          : todo
      )
    );
  }

  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>Todo List</h1>
      </div>
      
      <TodoInput onAddTodo={addTodo}/>

      {todos.length === 0 ? (
        <div className="empty-state">
          No todos yet. Add your first task!
        </div>
      ) : (
        <div>
          {todos.map((todo) => (
            <TodoItem 
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
            />
          ))}
        </div>
      )}
    </div>
  );
}