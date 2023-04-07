export function fetchQuestions(limit) {
    return fetch(`https://the-trivia-api.com/api/questions?limit=${limit}`)
      .then(response => response.json())
      .catch(error => {
        console.error(error);
      });
  }