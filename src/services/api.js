const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
class ApiService {
  async request(endpoint, options = {}) {
    const token = localStorage.getItem('authToken');
    const config = { ...options, headers: { 'Content-Type': 'application/json', ...(token && { Authorization: `Bearer ${token}` }), ...options.headers } };
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    return response.json();
  }
  get(endpoint) { return this.request(endpoint, { method: 'GET' }); }
  post(endpoint, body) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(body) }); }
  put(endpoint, body) { return this.request(endpoint, { method: 'PUT', body: JSON.stringify(body) }); }
  delete(endpoint) { return this.request(endpoint, { method: 'DELETE' }); }
}
export default new ApiService();
