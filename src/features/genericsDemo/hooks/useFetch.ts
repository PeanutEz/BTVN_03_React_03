import { useState, useEffect } from "react";
import type { ApiResponse } from "../types/ApiResponse";

/**
 * Generic useFetch Hook
 * T is the generic type parameter representing the data structure
 * This hook can fetch any type of data and maintain type safety
 *
 * @param url - The API endpoint to fetch from
 * @returns ApiResponse<T> - Type-safe response object
 */
export function useFetch<T>(url: string): ApiResponse<T> {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const abortController = new AbortController();

    // Async function to fetch data
    async function fetchData() {
      try {
        const response = await fetch(url, { signal: abortController.signal });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData: T = await response.json();

        if (!abortController.signal.aborted) {
          setState({ data: jsonData, loading: false, error: null });
        }
      } catch (err) {
        if (!abortController.signal.aborted) {
          setState({
            data: null,
            loading: false,
            error:
              err instanceof Error
                ? err.message
                : "An error occurred while fetching data",
          });
        }
      }
    }

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return state;
}
