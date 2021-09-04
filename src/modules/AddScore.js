import Store from './Store.js';
import UserInterface from './UserInterface.js';

export default class AddScore {
  constructor() {
    this.store = new Store();
    this.addButton = document.getElementById('add-score');
    this.UI = new UserInterface();
  }

  AddItem() {
    this.user = document.getElementById('input-user').value;
    this.score = document.getElementById('input-score').value;
    if (this.user && this.score) {
      document.getElementById('input-user').value = '';
      document.getElementById('input-score').value = '';
      return this.store.addNewItem(this.user, this.score);
    }

    return null;
  }

  AddItemOnClick() {
    this.addButton.addEventListener('click', () => {
      this.AddItem().then(() => {
        this.UI.displayLeaderboard();
      });
    });
  }
}