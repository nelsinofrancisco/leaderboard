import 'bootstrap/dist/css/bootstrap.min.css';
import AddScore from './modules/AddScore.js';
import RefreshScore from './modules/RefreshScore.js';
import UserInterface from './modules/UserInterface.js';
import './styles.css';

const UI = new UserInterface();
const ADD_SCORE = new AddScore();
const REFRESH_SCORE = new RefreshScore();

UI.displayLeaderboard();
ADD_SCORE.AddItemOnClick();
REFRESH_SCORE.addRefreshOnClick();