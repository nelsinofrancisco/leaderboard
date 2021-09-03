import Store from './Store.js';

export default class UserInterface {
  constructor() {
    this.store = new Store();
    this.leaderboardContainer = document.getElementById('leaderboard-container');
  }

  displayLeaderboard() {
    this.data = this.store.getData();
    this.data.then((result) => {
      this.leaderboardContainer.innerHTML = '';
      result.forEach((item, index) => {
        this.leaderboardContainer.innerHTML += `<li id="score-${index}" class="leaderboard-rows d-flex">
        <p>${item.user}</p>
        <span class="me-1">:</span>
        <p>${item.score}</p>
        </li>`;
      });
    });
  }
}