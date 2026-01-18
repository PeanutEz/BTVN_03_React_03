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

type Calculate = (a: number, b: number) => number;

type UserWithRole = User & { role: Role };

type ID = string | number;
type Point = [number, number];

type ApiResponse<T> =
    | { status: "success"; data: T }
    | { status: "error"; message: string };


function UserCard({ user }: UserCardProps) {
    return (
        <div className="card">
            <h4>👤 UserCard (Interface Props)</h4>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}


export default function InterfaceAndTypeDemo() {

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

    const calculate: Calculate = (a, b) => a * b;

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
            <h1>🆚 Interface vs Type – Demo Dễ Hiểu</h1>

            <div className="grid">
                <div className="column interface">
                    <h2>🔷 INTERFACE</h2>

                    <div className="card">
                        <h4>1️⃣ Object Structure</h4>
                        <p>Object PHẢI đúng cấu trúc interface</p>
                        <pre>{JSON.stringify(user, null, 2)}</pre>
                    </div>

                    <UserCard user={user} />

                    <div className="card">
                        <h4>3️⃣ Extend Interface</h4>
                        <p>Admin kế thừa User</p>
                        <pre>{JSON.stringify(admin, null, 2)}</pre>
                    </div>

                    <div className="card">
                        <h4>4️⃣ Interface Merge</h4>
                        <p>Interface khai báo 2 lần → tự động gộp</p>
                        <pre>{JSON.stringify(config, null, 2)}</pre>
                    </div>

                </div>

                <div className="column type">
                    <h2>🔶 TYPE</h2>

                    <div className="card">
                        <h4>1️⃣ Union Type</h4>
                        <p>Role: {role}</p>
                        {(["admin", "editor", "viewer"] as Role[]).map((r) => (
                            <button
                                key={r}
                                className={role === r ? "active" : ""}
                                onClick={() => setRole(r)}
                            >
                                {r}
                            </button>
                        ))}
                    </div>

                    <div className="card">
                        <h4>2️⃣ Function Type</h4>
                        <p>calculate(3, 4) = {calculate(3, 4)}</p>
                    </div>

                    <div className="card">
                        <h4>3️⃣ Intersection Type</h4>
                        <pre>{JSON.stringify(userWithRole, null, 2)}</pre>
                    </div>

                    <div className="card">
                        <h4>4️⃣ Alias & Tuple</h4>
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
                👉 Interface = Object & Props
                | Type = Union & Logic phức tạp
            </footer>
        </div>
    );
}
