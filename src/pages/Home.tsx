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
            Explore the differences between Interface and Type in TypeScript.
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
          <p>Understand React useEffect lifecycle.</p>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-useeffect")}
          >
            Go to useEffect Demo
          </button>
        </div>

        {/* Type Annotation */}
        <div className="demo-card">
          <div className="demo-icon">👨‍💻</div>
          <h2>Type Annotation Demo</h2>
          <p>Understand Type Annotation in TypeScript.</p>
          <button
            className="nav-button btn-tertiary"
            onClick={() => navigate("/demo-type-annotation")}
          >
            Go to Type Annotation Demo
          </button>
        </div>

        {/* useReducer */}
        <div className="demo-card">
          <div className="demo-icon">🧠</div>
          <h2>useReducer Demo</h2>
          <p>Understand React useReducer hook.</p>
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
          <button
            className="nav-button btn-primary"
            onClick={() => navigate("/demo-useref")}
          >
            Go to useRef Demo
          </button>
        </div>

        {/* useMemo */}
        <div className="demo-card">
          <div className="demo-icon">👽</div>
          <h2>useMemo & useCallback Demo</h2>
          <button
            className="nav-button btn-primary"
            onClick={() => navigate("/demo-usememo")}
          >
            Go to useMemo Demo
          </button>
        </div>

        {/* useContext */}
        <div className="demo-card">
          <div className="demo-icon">🌐</div>
          <h2>useContext Demo</h2>
          <button
            className="nav-button btn-secondary"
            onClick={() => navigate("/demo-usecontext")}
          >
            Go to useContext Demo
          </button>
        </div>

        {/* Generics */}
        <div className="demo-card">
          <div className="demo-icon">🎯</div>
          <h2>Generics Demo</h2>
          <p>
            Master TypeScript Generics with type-safe hooks, components, and API
            responses.
          </p>
          <button
            className="nav-button btn-tertiary"
            onClick={() => navigate("/demo-generics")}
          >
            Go to Generics Demo
          </button>
        </div>
      </div>
    </div>
  );
}
