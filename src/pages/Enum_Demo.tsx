import { useState } from "react";
import { UserRole } from "../enums/UserRole";
import "./Enum_Demo.css";

const Enum_Demo = () => {
    const [role, setRole] = useState<UserRole>(UserRole.USER);

    return (
        <div className="demo-card">
            <h2>TypeScript Enum Demo</h2>

            <p>
                Current role: <b>{role}</b>
            </p>

            <div className="btn-group">
                <button onClick={() => setRole(UserRole.ADMIN)}>Admin</button>
                <button onClick={() => setRole(UserRole.USER)}>User</button>
                <button onClick={() => setRole(UserRole.GUEST)}>Guest</button>
            </div>
        </div>
    );
};

export default Enum_Demo;
