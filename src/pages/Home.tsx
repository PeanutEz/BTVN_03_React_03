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
          <h2>Interface & Type Demo</h2>
          <p>
            Explore the differences between Interface and Type in TypeScript,
            and learn when to use each through practical examples.
          </p>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-interfaceandtype")}
          >
            Go to Interface & Type Demo
          </button>
        </div>

      </div>
    </div>
  );
}