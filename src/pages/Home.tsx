import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is Group 1 Demo Project</h1>
            <li>
        <Link to="/demo-type-annotation" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}>
          Demo Type Annotation
        </Link>
      </li>
    </div>
  );
}