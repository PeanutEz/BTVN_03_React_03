import React from "react";

/**
 * Generic List Component Props
 * T is a generic type parameter that represents the type of items in the list
 * This component can render lists of any type while maintaining type safety
 */
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  emptyMessage?: string;
  title?: string;
}

/**
 * Generic List Component
 * Demonstrates how generics enable creating reusable UI components
 * that work with different data types
 */
export function List<T>({
  items,
  renderItem,
  keyExtractor,
  emptyMessage = "No items to display",
  title,
}: ListProps<T>) {
  if (items.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      {title && (
        <h3
          style={{
            color: "#2563eb",
            marginBottom: "15px",
            fontSize: "1.3rem",
            fontWeight: "600",
          }}
        >
          {title}
        </h3>
      )}
      <div>
        {items.map((item, index) => (
          <div key={keyExtractor(item)}>{renderItem(item, index)}</div>
        ))}
      </div>
    </div>
  );
}
