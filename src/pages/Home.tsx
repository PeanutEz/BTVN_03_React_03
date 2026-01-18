import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>This is Group 1 Demo Project</h1>
        <p className="subtitle">
          Choose a demo to explore React & TypeScript features
        </p>
      </div>

      <div className="demo-cards">
        {/* useState */}
        <div className="demo-card">
          <div className="demo-icon">📋</div>
          <h2>Todo List Demo</h2>
          <p>
            Explore React useState hook with a fully functional todo list
            application.
          </p>
          <button
            className="nav-button btn-primary"
            onClick={() => navigate("/demo-usestate")}
          >
            Go to Todo Demo
          </button>
        </div>

        {/* Union Types */}
        <div className="demo-card">
          <div className="demo-icon">🔗</div>
          <h2>Union Types Demo</h2>
          <p>
            Learn TypeScript Union Types with interactive examples and
            real-world use cases.
          </p>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-uniontypes")}
          >
            Go to Union Types Demo
          </button>
        </div>

        {/* Interface & Type */}
        <div className="demo-card">
          <div className="demo-icon">📦</div>
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

        {/* Enum */}
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

        {/* useEffect */}
        <div className="demo-card">
          <div className="demo-icon">⏱️</div>
          <h2>useEffect Demo</h2>
          <p>
            Understand React useEffect lifecycle: mount, update and cleanup.
          </p>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-useeffect")}
          >
            Go to useEffect Demo
          </button>
        </div>

        {/* useReducer */}
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

        {/* useRef */}
        <div className="demo-card">
          <div className="demo-icon">📍</div>
          <h2>useRef Demo</h2>
          <p>
            Learn how to use React useRef hook to access DOM elements directly.
          </p>
          <button
            className="nav-button btn-primary"
            onClick={() => navigate("/demo-useref")}
          >
            Go to useRef Demo
          </button>
        </div>

        {/* useMemo + useCallback */}
        <div className="demo-card">
          <div className="demo-icon">👽</div>
          <h2>useMemo & useCallback Demo</h2>
          <p>
            Learn how to use React useMemo and useCallback hooks to optimize
            performance.
          </p>
          <button
            className="nav-button btn-primary"
            onClick={() => navigate("/demo-usememo")}
          >
            Go to useMemo & useCallback Demo
          </button>
        </div>

        {/* useContext */}
        <div className="demo-card">
          <div className="demo-icon">🌐</div>
          <h2>useContext Demo</h2>
          <p>
            Master React useContext for global state management with Auth,
            Theme, and Language switching.
          </p>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-usecontext")}
          >
            Go to useContext Demo
          </button>
        </div>
      </div>
    </div>
  );
}
