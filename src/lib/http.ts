const DEFAULT_API_URL = "https://mola-api.tyeongk.im/api" as const;
const fetch = window.fetch;

class APIClient {
	constructor(private baseUrl: string) {
		if (baseUrl === DEFAULT_API_URL) {
			console.warn(
				"Using default API URL. Make sure to set the VITE_API_URL environment variable in production.",
			);
		}
	}

	private async request<T>(
		path: string,
		method: string,
		body?: unknown,
	): Promise<T> {
		const url = new URL(path, this.baseUrl).toString();

		const accessToken = localStorage.getItem("accessToken") || null;

		try {
			const response = await fetch(url, {
				method,
				headers: {
					"Content-Type": "application/json",
					Authorization: accessToken ? `Bearer ${accessToken}` : "",
				},
				body: isBodyContainable(method) ? JSON.stringify(body) : undefined,
			});

			console.log(new Date().toISOString(), "API Request", method, url, body);

			const data: T = await response.json();

			console.log(new Date().toISOString(), "API Response", method, url, data);

			if (!response.ok) {
				console.error(response);
				throw new Error("API Request failed");
			}

			return data;
		} catch (error) {
			console.error("API request failed:", error);
			return Promise.reject(error);
		}
	}

	async get<T>(path: string): Promise<T> {
		return this.request<T>(path, "GET");
	}

	async post<T>(path: string, data: unknown): Promise<T> {
		return this.request<T>(path, "POST", data);
	}

	async put<T>(path: string, data: unknown): Promise<T> {
		return this.request<T>(path, "PUT", data);
	}

	async patch<T>(path: string, data: unknown): Promise<T> {
		return this.request<T>(path, "PATCH", data);
	}

	async delete<T>(path: string): Promise<T> {
		return this.request<T>(path, "DELETE");
	}
}

export const apiClient = new APIClient(
	import.meta.env.TAURI_ENV_DEBUG
		? DEFAULT_API_URL
		: import.meta.env.VITE_API_URL || DEFAULT_API_URL,
);

function isBodyContainable(method: string): boolean {
	return (
		method === "POST" ||
		method === "PUT" ||
		method === "PATCH" ||
		method === "DELETE"
	);
}
