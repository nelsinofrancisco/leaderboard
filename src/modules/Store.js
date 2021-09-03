export default class Store {
  constructor() {
    this.data = [];
    this.scoresUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/3gzKgQw1q3aYFwMBp9Em/scores/';
  }

  addNewItem(user, score) {
    this.obj = {
      user,
      score,
    };

    const promise = fetch(this.scoresUrl, {
      method: 'POST',
      body: JSON.stringify(this.obj),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json().result);
    return promise;
  }

  #privateSetData() {
    this.data = fetch(this.scoresUrl)
      .then((response) => response.json())
      .then((json) => (json.result));
  }

  getData() {
    this.#privateSetData();
    return this.data;
  }
}
