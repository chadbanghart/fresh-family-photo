// Business logic for the users data resource

import * as usersAPI from './users-api';

export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem('token', token);
  // TODO: return the user object from within the token instead of the token
  return getUser();
}

export function logOut() {
  localStorage.removeItem('token');
}

export async function login(userData) {
  const token = await usersAPI.login(userData);
  localStorage.setItem('token', token);
  // TODO: return the user object from within the token instead of the token
  return getUser();
}

export function getToken() {
  // getItem returns null if there is no key
  const token = localStorage.getItem('token');
  if(!token) return null;
  const payload =  JSON.parse(atob(token.split('.')[1]));
  // a JWT exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp * 1000 < Date.now()) {
    localStorage.removeItem('token');
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  // If there's a token, return the user in the payload, otherwise return null
  return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

export function checkToken() {
  // We cant forget how to use .then with promises
  return usersAPI.checkToken()
    .then(dateStr => new Date(dateStr));
}