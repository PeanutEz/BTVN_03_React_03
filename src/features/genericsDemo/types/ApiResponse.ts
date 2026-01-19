/**
 * Generic API Response Type
 * T represents the type of data being returned
 * This demonstrates how generics can make types flexible and reusable
 */
export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
