export const BASE_URL = 'http://localhost:3001';
export const headers = {
  'Content-Type': 'application/json'
};

// Авторизация - регистрация:
export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ password, email }),
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};
export function authorize(password, email ) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ password, email }),
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};
export function checkToken() {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
// Api запросы /questions:
export function postQuestion(questionData) {
  return fetch(`${BASE_URL}/questions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(questionData),
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
export function deleteQuestion(questionId) {
  return fetch(`${BASE_URL}/questions/${questionId}`, {
    method: 'DELETE',
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
export function getQuestions() {
  return fetch(`${BASE_URL}/questions`, {
    method: 'GET',
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
// Api запросы /quiz-topics:
export function getQuizTopics() {
  return fetch(`${BASE_URL}/quiz-topics`, {
    method: 'GET',
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
export function postQuizTopic(quizTopicData) {
  return fetch(`${BASE_URL}/quiz-topics`, {
    method: 'POST',
    headers,
    body: JSON.stringify(quizTopicData),
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
export function deleteQuizTopic(quizTopicId) {
  return fetch(`${BASE_URL}/quiz-topics/:${quizTopicId}`, {
    method: 'DELETE',
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}
