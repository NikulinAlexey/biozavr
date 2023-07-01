export const BASE_URL = 'https://auth.nomoreparties.co';
export const headers = { authorization: 'Мой токен', 'Content-Type': 'application/json' };

// Авторизация:
export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};
export function authorize(password,email ) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
};

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  })
    .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)) 
}

// export function postQuestion(questionData) {
//   return fetch(`${this._baseUrl}/questions`, {
//     method: 'POST',
//     headers: this._headers,
//     body: JSON.stringify({
//       image: `${questionData.image}`,
//       mainText: `${questionData.mainText}`,
//       subText: `${questionData.subText}`,
//       theme: `${questionData.theme}`,
//       line: `${questionData.line}`,
//       source: `${questionData.source}`,
//       answer: `${questionData.answer}`,
//       explanation: `${questionData.subexplanationText}`,
//       instruction: `${questionData.instruction}`,
//     })
//   })
//     .then((res) => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`))
// }