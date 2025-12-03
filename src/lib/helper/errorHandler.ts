import axios from 'axios';

export interface ApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// Main error handler
export const handleApiError = (error: unknown): ApiError => {
  if (axios.isAxiosError(error)) {
    const statusCode = error.response?.status || 500;
    const message = error.response?.data?.message || 'Something went wrong';
    const errors = error.response?.data?.errors;

    return { message, statusCode, errors };
  }

  return {
    message: 'An unexpected error occurred',
    statusCode: 500,
  };
};

// Simple helpers
export const getErrorMessage = (error: unknown): string => {
  if (error && typeof error === 'object' && 'message' in error) {
    return (error as ApiError).message;
  }
  return 'An error occurred';
};

export const getFieldError = (
  errors: Record<string, string[]> | undefined,
  field: string
): string | null => {
  return errors?.[field]?.[0] || null;
};