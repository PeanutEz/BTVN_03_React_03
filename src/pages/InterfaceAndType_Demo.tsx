import { useState } from "react";
import "./InterfaceAndType_Demo.css";
interface User {
    id: number;
    name: string;
    email: string;
}

interface UserCardProps {
    user: User;
}

interface Admin extends User {
    role: "admin";
}

interface AppConfig {
    theme: string;
}

interface AppConfig {
    language: string;
}


type Role = "admin" | "editor" | "viewer";


type Calculator = (a: number, b: number) => number;


type UserWithRole = User & { role: Role };


type ID = string | number;
type Point = [number, number];


type ApiResponse<T> =
    | { status: "success"; data: T }
    | { status: "error"; message: string };


function UserCard({ user }: UserCardProps) {
    return (
        <div className="card">
            <h4>👤 User Card (Interface Props)</h4>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
}


export default function InterfaceVsTypeDemo() {

    const user: User = {
        id: 1,
        name: "Nguyễn Như Đại",
        email: "dai@example.com",
    };

    const admin: Admin = {
        ...user,
        role: "admin",
    };

    const config: AppConfig = {
        theme: "dark",
        language: "vi",
    };

    const [role, setRole] = useState<Role>("viewer");

    const add: Calculator = (a, b) => a + b;

    const [numA, setNumA] = useState<number>(0);
    const [numB, setNumB] = useState<number>(0);

    const userWithRole: UserWithRole = {
        ...user,
        role,
    };

    const id: ID = 101;
    const point: Point = [10, 20];

    const response: ApiResponse<User> = {
        status: "success",
        data: user,
    };

    return (
        <div className="container">
            <h1>🆚 Interface vs Type – TypeScript Demo</h1>

            <div className="grid">

                <div className="column interface">
                    <h2>🔷 INTERFACE</h2>

                    <div className="card">
                        <h4>1️⃣ Object Structure</h4>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                    </div>

                    <UserCard user={user} />

                    <div className="card">
                        <h4>3️⃣ Extend Interface</h4>
                        <pre>{JSON.stringify(admin, null, 2)}</pre>
                    </div>

                    <div className="card">
                        <h4>4️⃣ Interface Merge</h4>
                        <p>
                            <code>interface AppConfig &#123; theme &#125;</code><br />
                            <code>interface AppConfig &#123; language &#125;</code>
                        </p>
                        <pre>{JSON.stringify(config, null, 2)}</pre>
                    </div>
                </div>

                <div className="column type">
                    <h2>🔶 TYPE</h2>

                    <div className="card">
                        <h4>1️⃣ Union Type</h4>
                        <p>Role: <strong>{role}</strong></p>
                        <div className="button-group">
                            {(["admin", "editor", "viewer"] as Role[]).map(r => (
                                <button
                                    key={r}
                                    className={role === r ? "active" : ""}
                                    onClick={() => setRole(r)}
                                >
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <h4>🔧 Function Type</h4>
                        <code>type Calculator = (a: number, b: number) =&gt; number;</code>

                        <div className="input-group">
                            <span>a = </span>
                            <input
                                type="number"
                                value={numA}
                                onChange={(e) => setNumA(Number(e.target.value))}
                            />
                            <span>b = </span>
                            <input
                                type="number"
                                value={numB}
                                onChange={(e) => setNumB(Number(e.target.value))}
                            />
                        </div>

                        <p className="result">
                            Kết quả: <strong>{add(numA, numB)}</strong>
                        </p>
                    </div>

                    <div className="card">
                        <h4>3️⃣ Intersection</h4>
                        <pre>{JSON.stringify(userWithRole, null, 2)}</pre>
                    </div>

                    <div className="card">
                        <h4>4️⃣ Tuple / Alias</h4>
                        <p>ID: {id}</p>
                        <p>Point: [{point.join(", ")}]</p>
                    </div>

                    <div className="card">
                        <h4>5️⃣ Complex Logic</h4>
                        <pre>{JSON.stringify(response, null, 2)}</pre>
                    </div>
                </div>
            </div>

            <footer>
                🔷 Interface → Object & Props
                🔶 Type → Union & Logic phức tạp
            </footer>
        </div>
    );
}
