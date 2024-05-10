// API modules handle network/AJAX calls
import sendRequest from "./send-requests";
const BASE_URL = '/api/users';

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(userData) {
 return sendRequest(`${BASE_URL}/login`, 'POST', userData);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}