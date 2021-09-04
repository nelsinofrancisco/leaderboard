import Store from './Store.js';

export default class UserInterface {
  constructor() {
    this.store = new Store();
    this.leaderboardContainer = document.getElementById('leaderboard-container');
  }

  displayLeaderboard() {
    this.data = this.store.getData();

    this.leaderboardContainer.innerHTML = `<div class="spinner-border position-absolute" "role="status">
    </div>`;

    this.data.then((result) => {
      setTimeout(
        () => {
          this.leaderboardContainer.innerHTML = '';
          result.forEach((item, index) => {
            this.leaderboardContainer.innerHTML += `<li id="score-${index}" class="leaderboard-rows d-flex">
        <p class="paragraph-style">${item.user}</p>
        <span class="span-style me-1">:</span>
        <p class="paragraph-style">${item.score}</p>
        </li>`;
          });
        },
        1300,
      );
    });
  }
}