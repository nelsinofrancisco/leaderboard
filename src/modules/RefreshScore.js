import Store from './Store.js';
import UserInterface from './UserInterface.js';

export default class RefreshScore {
  constructor() {
    this.store = new Store();
    this.UI = new UserInterface();
    this.refreshButton = document.getElementById('refresh-score');
  }

  addRefreshOnClick() {
    this.refreshButton.addEventListener('click', () => {
      this.UI.displayLeaderboard();
    });
  }
}