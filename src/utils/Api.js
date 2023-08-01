export const BASE_URL = 'http://localhost:3001';
export const headers = {
  authorization: 'c04ae5cc-badb-4402-8d81-d912a16f1158',
  'Content-Type': 'application/json'
};

// Авторизация:
export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email }),
    credentials: "include",
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};
export function authorize(password, email ) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export function checkToken() {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    mode: "cors",
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
}

export function postQuestion(questionData) {
  return fetch(`${BASE_URL}/questions`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      image: `${questionData.image}`,
      mainText: `${questionData.mainText}`,
      subText: `${questionData.subText}`,
      theme: `${questionData.theme}`,
      line: `${questionData.line}`,
      source: `${questionData.source}`,
      answer: `${questionData.answer}`,
      explanation: `${questionData.explanation}`,
      instruction: `${questionData.instruction}`,
    }),
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