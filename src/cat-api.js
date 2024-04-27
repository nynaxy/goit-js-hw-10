const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key':
    'live_Wu11wiWr6Hel1Oif1keZN7b4AjK3iafdHgMSaKCEtqiZR4q5UJ69452dtWQnKF5q',
});

var requestOptions = {
  method: 'GET',
  headers: headers,
  redirect: 'follow',
};

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds', requestOptions);
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
    requestOptions
  );
}