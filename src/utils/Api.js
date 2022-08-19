const BASE_URL = "http://localhost:3003";

function checkStatus(res) {
  console.log(res);
  if (!res.ok) {
    return Promise.reject(`${res.status}`);
  }
  return res.json();
}

export function login({ email, password }) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkStatus);
}

export function register({ email, password }) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkStatus);
}
