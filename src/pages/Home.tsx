import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>This is Group 1 Demo Project</h1>
        <p className="subtitle">Choose a demo to explore React & TypeScript features</p>
      </div>

      <div className="demo-cards">
        <div className="demo-card">
          <div className="demo-icon">📋</div>
          <h2>Todo List Demo</h2>
          <p>Explore React useState hook with a fully functional todo list application.</p>
          <button
            className="nav-button btn-primary"
            onClick={() => navigate("/demo-usestate")}
          >
            Go to Todo Demo
          </button>
        </div>

        <div className="demo-card">
          <div className="demo-icon">🔗</div>
          <h2>Union Types Demo</h2>
          <p>Learn TypeScript Union Types with interactive examples and real-world use cases.</p>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-uniontypes")}
          >
            Go to Union Types Demo
          </button>
        </div>

        <div className="demo-card">
  <div className="demo-icon">🧩</div>
  <h2>Enum Demo</h2>
  <p>Demonstrate TypeScript Enum and how it works at runtime.</p>
  <button
    className="nav-button btn-primary"
    onClick={() => navigate("/demo-enum")}
  >
    Go to Enum Demo
  </button>
</div>

<div className="demo-card">
  <div className="demo-icon">⏱️</div>
  <h2>useEffect Demo</h2>
  <p>Understand React useEffect lifecycle: mount, update and cleanup.</p>
  <button
    className="nav-button btn-secondary"
    onClick={() => navigate("/demo-useeffect")}
  >
    Go to useEffect Demo
  </button>
</div>

<div className="demo-card">
  <div className="demo-icon">🧠</div>
  <h2>useReducer Demo</h2>
  <p>
    Understand React <b>useReducer</b> hook for complex state management
    using actions and reducers.
  </p>
  <button
    className="nav-button btn-tertiary"
    onClick={() => navigate("/use-reducer")}
  >
    Go to useReducer Demo
  </button>
</div>

          </button>
        </div>

      </div>
    </div>
  );
}