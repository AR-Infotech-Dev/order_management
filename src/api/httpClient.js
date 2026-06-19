const API_ENDPOINTS = {
  login: "/login",
  forgotPassword: "/forgot-password",
  verifyOtp: "/verify-otp",
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export async function makeRequest(endpoint, options = {}) {
  const url = API_ENDPOINTS[endpoint] || endpoint;
  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}
