export const getApiBaseUrl = (): string => {
  let envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl && typeof envUrl === "string") {
    // If user passed a comma-separated list by accident, pick the matching or first URL
    if (envUrl.includes(",")) {
      const urls = envUrl.split(",").map((u: string) => u.trim()).filter(Boolean);
      const currentHost = typeof window !== "undefined" ? window.location.hostname : "";
      envUrl = urls.find((u: string) => u.includes(currentHost)) || urls[0] || "";
    }
    let cleanUrl = envUrl.trim().replace(/\/+$/, "");
    if (cleanUrl) {
      // Ensure /api/v1 suffix is present
      if (!cleanUrl.endsWith("/api/v1") && !cleanUrl.endsWith("/api")) {
        cleanUrl = `${cleanUrl}/api/v1`;
      }
      return cleanUrl;
    }
  }

  if (typeof window !== "undefined") {
    // If running directly on Vite dev server on localhost, point to local backend
    if (window.location.port === "5173" && (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
      return "http://localhost:4000/api/v1";
    }
    // In production, on AWS EC2, or behind Nginx, use relative /api/v1 (same-origin, eliminates all CORS issues)
    return "/api/v1";
  }
  return "/api/v1";
};

export const API_BASE_URL = getApiBaseUrl();

/** Fetch helper used by every API module. Throws an Error carrying the server's message (and `code`, `status`). */
export class ApiRequestError extends Error {
  status: number;
  code?: string;
  constructor(message: string, status: number, code?: string) {
    super(message);
    this.status = status;
    this.code = code;
  }
}

export async function request<T>(endpoint: string, token?: string | null, options: RequestInit = {}): Promise<T> {
  const headers = new Headers(options.headers || {});
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) headers.set("Content-Type", "application/json");

  const response = await fetch(`${API_BASE_URL}${endpoint}`, { ...options, headers, credentials: "include" });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new ApiRequestError(data.message || `HTTP error ${response.status}`, response.status, data.code);
  return data as T;
}

/** Every successful API response is `{ error: false, data }`. */
export async function requestData<T>(endpoint: string, token?: string | null, options: RequestInit = {}): Promise<T> {
  return (await request<{ data: T }>(endpoint, token, options)).data;
}

export const jsonBody = (body: unknown): RequestInit => ({ body: JSON.stringify(body) });

/** Query string from an object, skipping empty values. */
export function qs(params: Record<string, string | number | boolean | undefined | null>): string {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) if (v !== undefined && v !== null && v !== "") q.set(k, String(v));
  const s = q.toString();
  return s ? `?${s}` : "";
}
