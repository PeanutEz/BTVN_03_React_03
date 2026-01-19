import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { List } from "../components/List";
import type { User } from "../types/User";
import type { Post } from "../types/Post";
import "./GenericsDemo.css";

/**
 * Generics Demo Component
 * Demonstrates TypeScript Generics in React:
 * - Generic types (ApiResponse<T>)
 * - Generic hooks (useFetch<T>)
 * - Generic components (List<T>)
 */
const GenericsDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<"users" | "posts">("users");

  // Using the generic useFetch hook with different types
  // Notice how TypeScript infers the correct type for each call
  const usersResponse = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );
  const postsResponse = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  // Type-safe access to data
  const users = usersResponse.data || [];
  const posts = (postsResponse.data || []).slice(0, 10); // Limit to 10 posts for demo

  /**
   * Render function for User items
   * Type T is inferred as User
   */
  const renderUser = (user: User) => (
    <div className="user-card">
      <h4>👤 {user.name}</h4>
      <div className="user-detail">
        <strong>Username:</strong> {user.username}
      </div>
      <div className="user-detail">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="user-detail">
        <strong>Phone:</strong> {user.phone}
      </div>
      <div className="user-detail">
        <strong>Website:</strong> {user.website}
      </div>
    </div>
  );

  /**
   * Render function for Post items
   * Type T is inferred as Post
   */
  const renderPost = (post: Post) => (
    <div className="post-card">
      <h4>📝 {post.title}</h4>
      <div className="post-meta">
        Post #{post.id} | User ID: {post.userId}
      </div>
      <div className="post-body">{post.body}</div>
    </div>
  );

  // Determine which data to display
  const isLoading =
    activeDemo === "users" ? usersResponse.loading : postsResponse.loading;
  const error =
    activeDemo === "users" ? usersResponse.error : postsResponse.error;

  return (
    <div className="generics-demo">
      <h1>🎯 TypeScript Generics Demo</h1>
      <p className="subtitle">
        Understanding Generic Types, Hooks, and Components in React + TypeScript
      </p>

      {/* Explanation Section */}
      <div className="explanation">
        <h2>💡 What are Generics?</h2>
        <p>
          Generics allow you to write flexible, reusable code that works with
          multiple types while maintaining type safety. Think of them as "type
          parameters" or "placeholders" for types.
        </p>
        <ul>
          <li>
            <code>ApiResponse&lt;T&gt;</code> - A generic type that can hold any
            data type
          </li>
          <li>
            <code>useFetch&lt;T&gt;</code> - A generic hook that fetches and
            returns type-safe data
          </li>
          <li>
            <code>List&lt;T&gt;</code> - A generic component that can render
            lists of any type
          </li>
        </ul>
        <p>
          <strong>Example:</strong> <code>useFetch&lt;User[]&gt;</code> knows it
          will return User[] data, while <code>useFetch&lt;Post[]&gt;</code>{" "}
          knows it will return Post[] data - all using the same hook!
        </p>
      </div>

      {/* Control Buttons */}
      <div className="controls">
        <button
          className={`btn-users ${activeDemo === "users" ? "active" : ""}`}
          onClick={() => setActiveDemo("users")}
        >
          Show Users (List&lt;User&gt;)
        </button>
        <button
          className={`btn-posts ${activeDemo === "posts" ? "active" : ""}`}
          onClick={() => setActiveDemo("posts")}
        >
          Show Posts (List&lt;Post&gt;)
        </button>
      </div>

      {/* Loading State */}
      {isLoading && <div className="loading">⏳ Loading data...</div>}

      {/* Error State */}
      {error && (
        <div className="error">
          <strong>❌ Error:</strong> {error}
        </div>
      )}

      {/* Data Display */}
      {!isLoading && !error && (
        <div className="data-section">
          <div className="type-badge">
            Current Type: {activeDemo === "users" ? "User[]" : "Post[]"}
          </div>

          {activeDemo === "users" ? (
            <List<User>
              items={users}
              renderItem={renderUser}
              keyExtractor={(user) => user.id}
              title={`Users (${users.length} total)`}
              emptyMessage="No users found"
            />
          ) : (
            <List<Post>
              items={posts}
              renderItem={renderPost}
              keyExtractor={(post) => post.id}
              title={`Posts (${posts.length} shown)`}
              emptyMessage="No posts found"
            />
          )}
        </div>
      )}

      {/* Key Concepts Summary */}
      <div className="explanation" style={{ marginTop: "30px" }}>
        <h2>🔑 Key Concepts Demonstrated</h2>
        <ul>
          <li>
            <strong>Type Safety:</strong> TypeScript ensures we only access
            properties that exist on our types (User or Post)
          </li>
          <li>
            <strong>Reusability:</strong> The same List component and useFetch
            hook work with different data types
          </li>
          <li>
            <strong>Type Inference:</strong> TypeScript automatically infers
            types from generic parameters
          </li>
          <li>
            <strong>Flexibility:</strong> We can easily add new types (like
            Comments, Albums, etc.) without modifying our generic code
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GenericsDemo;
