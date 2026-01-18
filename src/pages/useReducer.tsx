import { useMemo, useReducer, useState } from "react";
import "./useReducer.css";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type State = {
  todos: Todo[];
};

type Action =
  | { type: "add"; payload: { text: string } }
  | { type: "toggle"; payload: { id: number } }
  | { type: "remove"; payload: { id: number } }
  | { type: "clear_done" }
  | { type: "reset" };

const initialState: State = {
  todos: [
    { id: 1, text: "Learn useReducer", done: false },
    { id: 2, text: "Build a small demo", done: true },
  ],
};

function todoReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      const text = action.payload.text.trim();
      if (!text) return state;

      const nextId =
        state.todos.length === 0 ? 1 : Math.max(...state.todos.map((t) => t.id)) + 1;

      const newTodo: Todo = { id: nextId, text, done: false };
      return { ...state, todos: [newTodo, ...state.todos] };
    }

    case "toggle": {
      const id = action.payload.id;
      return {
        ...state,
        todos: state.todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
      };
    }

    case "remove": {
      const id = action.payload.id;
      return { ...state, todos: state.todos.filter((t) => t.id !== id) };
    }

    case "clear_done": {
      return { ...state, todos: state.todos.filter((t) => !t.done) };
    }

    case "reset":
      return initialState;

    default:
      return state;
  }
}

export default function UseReducer_Demo() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const total = state.todos.length;
    const done = state.todos.filter((t) => t.done).length;
    return { total, done, left: total - done };
  }, [state.todos]);

  function onAdd() {
    dispatch({ type: "add", payload: { text } });
    setText("");
  }

  return (
    <div className="ur-wrap">
      <div className="ur-card">
        <h2 className="ur-title">useReducer Demo (Todo mini)</h2>
        <p className="ur-sub">
          Total: <b>{stats.total}</b> • Done: <b>{stats.done}</b> • Left: <b>{stats.left}</b>
        </p>

        <div className="ur-row">
          <input
            className="ur-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a todo..."
            onKeyDown={(e) => {
              if (e.key === "Enter") onAdd();
            }}
          />
          <button className="ur-btn" onClick={onAdd}>
            Add
          </button>
        </div>

        <div className="ur-actions">
          <button className="ur-btn ghost" onClick={() => dispatch({ type: "clear_done" })}>
            Clear done
          </button>
          <button className="ur-btn danger" onClick={() => dispatch({ type: "reset" })}>
            Reset
          </button>
        </div>

        <ul className="ur-list">
          {state.todos.map((t) => (
            <li key={t.id} className="ur-item">
              <label className="ur-left">
                <input
                  type="checkbox"
                  checked={t.done}
                  onChange={() => dispatch({ type: "toggle", payload: { id: t.id } })}
                />
                <span className={t.done ? "done" : ""}>{t.text}</span>
              </label>

              <button
                className="ur-x"
                onClick={() => dispatch({ type: "remove", payload: { id: t.id } })}
                aria-label="remove"
                title="Remove"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {state.todos.length === 0 && <p className="ur-empty">No todos. Add one 👆</p>}
      </div>

      
    </div>
  );
}
