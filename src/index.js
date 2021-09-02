import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const data = [
  {
    name: 'nelsino',
    score: 100,
  },
  {
    name: 'hamza',
    score: 200,
  },
  {
    name: 'carlos',
    score: 50,
  },
];

const displayItems = () => {
  const container = document.querySelector('#leaderboard-container');
  data.forEach((item, index) => {
    container.innerHTML += `<li id="score-${index}" class="leaderboard-rows d-flex">
    <p>${item.name}</p>
    <span class="me-1">:</span>
    <p>${item.score}</p>
    </li>`;
  });
};

displayItems();