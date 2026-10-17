// Which browser origins may call the API. Pure, so it is unit tested.

/** FRONTEND_URL may hold several origins separated by commas, or '*' to allow any origin. */
export function parseOrigins(raw: string | undefined): string[] {
  if (!raw || raw.trim() === "" || raw.trim() === "*") {
    return ["*"];
  }
  return raw
    .split(",")
    .map((o) => o.trim().replace(/\/+$/, ""))
    .filter(Boolean);
}

const LOCAL_ORIGIN = /^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/;

/**
 * Browsers send the origin without a trailing slash. A request with no Origin header (curl, server to server,
 * same-origin) is always allowed. If allowed contains '*' or is empty, any origin is permitted.
 */
export function isOriginAllowed(origin: string | undefined, allowed: string[], isProduction: boolean): boolean {
  if (!origin) return true;
  if (allowed.includes("*") || allowed.length === 0) return true;
  if (allowed.includes(origin)) return true;
  if (!isProduction && LOCAL_ORIGIN.test(origin)) return true;
  return false;
}
