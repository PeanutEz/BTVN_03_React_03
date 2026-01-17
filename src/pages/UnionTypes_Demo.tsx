import { useState } from 'react'
import './UnionTypes_Demo.css'

// ========== UNION TYPES DEMO ==========

// 1. Union Type cơ bản: Biến có thể là string HOẶC number
type StringOrNumber = string | number;

// 2. Union Type với literal values (giá trị cụ thể)
type Status = "pending" | "in-progress" | "completed" | "cancelled";

// 3. Union Type cho hình dạng (Shape)
type Shape = "circle" | "square" | "triangle";

// 4. Union Type cho theme
type Theme = "light" | "dark";

// 5. Union Type cho kích thước
type Size = "small" | "medium" | "large";

// 6. Union Type phức tạp - Discriminated Union
type Notification = 
  | { type: "success"; message: string }
  | { type: "error"; message: string; code: number }
  | { type: "warning"; message: string };

export default function UnionTypesDemo() {
  // Demo 1: Union Type string | number
  const [inputValue, setInputValue] = useState<StringOrNumber>("");
  const [valueType, setValueType] = useState<"string" | "number">("string");

  // Demo 2: Union Type Status
  const [taskStatus, setTaskStatus] = useState<Status>("pending");

  // Demo 3: Union Type Shape
  const [shape, setShape] = useState<Shape>("circle");

  // Demo 4: Union Type Theme
  const [theme, setTheme] = useState<Theme>("light");

  // Demo 5: Union Type Size
  const [size, setSize] = useState<Size>("medium");

  // Demo 6: Notification
  const [notification, setNotification] = useState<Notification | null>(null);

  // Hàm xử lý input với Union Type
  const handleInputChange = (value: string) => {
    if (valueType === "number") {
      const numValue = parseFloat(value);
      setInputValue(isNaN(numValue) ? 0 : numValue);
    } else {
      setInputValue(value);
    }
  };

  // Hàm render hình dạng
  const renderShape = () => {
    const sizeMap = { small: 60, medium: 100, large: 150 };
    const shapeSize = sizeMap[size];
    
    switch (shape) {
      case "circle":
        return <div className="shape circle" style={{ width: shapeSize, height: shapeSize }} />;
      case "square":
        return <div className="shape square" style={{ width: shapeSize, height: shapeSize }} />;
      case "triangle":
        return <div className="shape triangle" style={{ 
          borderLeft: `${shapeSize/2}px solid transparent`,
          borderRight: `${shapeSize/2}px solid transparent`,
          borderBottom: `${shapeSize}px solid #646cff`
        }} />;
    }
  };

  // Hàm lấy màu status
  const getStatusColor = (status: Status): string => {
    switch (status) {
      case "pending": return "#f0ad4e";
      case "in-progress": return "#5bc0de";
      case "completed": return "#5cb85c";
      case "cancelled": return "#d9534f";
    }
  };

  // Hàm hiển thị notification
  const showNotification = (type: "success" | "error" | "warning") => {
    switch (type) {
      case "success":
        setNotification({ type: "success", message: "Thao tác thành công!" });
        break;
      case "error":
        setNotification({ type: "error", message: "Đã xảy ra lỗi!", code: 500 });
        break;
      case "warning":
        setNotification({ type: "warning", message: "Cảnh báo: Hãy kiểm tra lại!" });
        break;
    }
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className={`app ${theme}`}>
      <h1>🎯 Demo Union Types trong TypeScript</h1>
      
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <strong>{notification.type.toUpperCase()}</strong>: {notification.message}
          {notification.type === "error" && <span> (Code: {notification.code})</span>}
        </div>
      )}

      {/* Demo 1: String | Number */}
      <section className="demo-section">
        <h2>1️⃣ Union Type: string | number</h2>
        <code>type StringOrNumber = string | number;</code>
        <div className="demo-content">
          <div className="radio-group">
            <label>
              <input 
                type="radio" 
                checked={valueType === "string"} 
                onChange={() => { setValueType("string"); setInputValue(""); }}
              /> String
            </label>
            <label>
              <input 
                type="radio" 
                checked={valueType === "number"} 
                onChange={() => { setValueType("number"); setInputValue(0); }}
              /> Number
            </label>
          </div>
          <input 
            type={valueType === "number" ? "number" : "text"}
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={`Nhập ${valueType}...`}
          />
          <p>Giá trị: <strong>{String(inputValue)}</strong> (typeof: <strong>{typeof inputValue}</strong>)</p>
        </div>
      </section>

      {/* Demo 2: Status */}
      <section className="demo-section">
        <h2>2️⃣ Union Type: Status</h2>
        <code>type Status = "pending" | "in-progress" | "completed" | "cancelled";</code>
        <div className="demo-content">
          <div className="button-group">
            {(["pending", "in-progress", "completed", "cancelled"] as Status[]).map((s) => (
              <button 
                key={s}
                className={taskStatus === s ? "active" : ""}
                style={{ backgroundColor: taskStatus === s ? getStatusColor(s) : "" }}
                onClick={() => setTaskStatus(s)}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="status-badge" style={{ backgroundColor: getStatusColor(taskStatus) }}>
            Trạng thái hiện tại: {taskStatus}
          </div>
        </div>
      </section>

      {/* Demo 3 & 5: Shape + Size */}
      <section className="demo-section">
        <h2>3️⃣ Union Type: Shape + Size</h2>
        <code>type Shape = "circle" | "square" | "triangle";</code>
        <code>type Size = "small" | "medium" | "large";</code>
        <div className="demo-content">
          <div className="button-group">
            <strong>Hình:</strong>
            {(["circle", "square", "triangle"] as Shape[]).map((s) => (
              <button key={s} className={shape === s ? "active" : ""} onClick={() => setShape(s)}>
                {s === "circle" ? "⭕" : s === "square" ? "⬛" : "🔺"} {s}
              </button>
            ))}
          </div>
          <div className="button-group">
            <strong>Kích thước:</strong>
            {(["small", "medium", "large"] as Size[]).map((s) => (
              <button key={s} className={size === s ? "active" : ""} onClick={() => setSize(s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="shape-container">
            {renderShape()}
          </div>
        </div>
      </section>

      {/* Demo 4: Theme */}
      <section className="demo-section">
        <h2>4️⃣ Union Type: Theme</h2>
        <code>type Theme = "light" | "dark";</code>
        <div className="demo-content">
          <div className="button-group">
            <button className={theme === "light" ? "active" : ""} onClick={() => setTheme("light")}>
              ☀️ Light
            </button>
            <button className={theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")}>
              🌙 Dark
            </button>
          </div>
        </div>
      </section>

      {/* Demo 6: Discriminated Union */}
      <section className="demo-section">
        <h2>5️⃣ Discriminated Union (Union Type phức tạp)</h2>
        <pre>{`type Notification = 
  | { type: "success"; message: string }
  | { type: "error"; message: string; code: number }
  | { type: "warning"; message: string };`}</pre>
        <div className="demo-content">
          <div className="button-group">
            <button className="success-btn" onClick={() => showNotification("success")}>
              ✅ Success
            </button>
            <button className="error-btn" onClick={() => showNotification("error")}>
              ❌ Error (có code)
            </button>
            <button className="warning-btn" onClick={() => showNotification("warning")}>
              ⚠️ Warning
            </button>
          </div>
        </div>
      </section>

      <footer>
        <p>💡 <strong>Union Types</strong> cho phép một biến có thể là một trong nhiều kiểu dữ liệu khác nhau</p>
      </footer>
    </div>
  )
}
