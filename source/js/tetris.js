import '../css/reset.css';
import '../css/tetris.css';
import computerIcon from '../images/computerIcon.png';
import startIcon from '../images/computerIcon.png';
import circleBackground from '../images/circleBackground.jpeg';

document.addEventListener('DOMContentLoaded', () => {
  // TODO : 화면 창 만들어 주기
  let wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  let header = document.createElement('header');
  let main = document.createElement('main');
  main.style.background = `url(${circleBackground})`;
  let footer = document.createElement('footer');
  wrapper.append(header, main);
  document.body.append(wrapper, footer);

  // * header 만들기
  let h1 = document.createElement('h1');
  h1.textContent = '테트리스';
  let menuItemTitle = document.createElement('div');
  menuItemTitle.classList.add('menuItemTitle');
  let menuItemInfo = document.createElement('div');
  menuItemInfo.classList.add('menuItemInfo');
  let menuItemInfoImg = document.createElement('img');
  menuItemInfoImg.setAttribute('src', computerIcon);
  menuItemInfoImg.setAttribute('alt', 'windows95 아이콘');
  let menuItemButton = document.createElement('button');
  menuItemButton.classList.add('menuItemButton');
  menuItemButton.textContent = 'X';
  menuItemButton.addEventListener('click', () => {
    window.location.replace('index.html'); // 메인 화면으로 다시
  });
  menuItemInfo.append(menuItemInfoImg, h1);
  document.querySelector('header').append(menuItemInfo, menuItemButton);

  // TODO : 게임 canvas 만들기
  let readMain = document.querySelector('main');
  let tetrisScreenWrapper = document.createElement('div');
  tetrisScreenWrapper.id = 'tetrisScreenWrapper';
  let tetrisScreen = document.createElement('canvas');
  tetrisScreen.id = 'tetrisScreen';
  tetrisScreenWrapper.append(tetrisScreen);

  // TODO : 정보창(점수, 시작/멈춤버튼, 리셋버튼) 만들기
  let gameInfoWrapper = document.createElement('div');
  gameInfoWrapper.id = 'gameInfoWrapper';
  let gameInfo = document.createElement('div');
  gameInfo.id = 'gameInfo';
  let gameScore = document.createElement('div');
  gameScore.textContent = `Score : 0`;
  let gameTitle = document.createElement('p');
  gameInfo.append(gameTitle, gameScore);
  gameTitle.textContent = 'Tetris';
  let gameInfoButtons = ['gameStatus', 'gameReset'];
  for (let i = 0; i < gameInfoButtons.length; i++) {
    let gameInfoButton = document.createElement('button');
    gameInfoButton.textContent = gameInfoButtons[i];
    gameInfo.appendChild(gameInfoButton);
  }
  gameInfoWrapper.append(gameInfo);
  readMain.append(gameInfoWrapper, tetrisScreenWrapper);

  // * footer만들기
  let startButton = document.createElement('div');
  startButton.classList.add('startButton');
  let startButtonImg = document.createElement('img');
  startButtonImg.setAttribute('src', startIcon);
  let startButtonBtn = document.createElement('button');
  startButtonBtn.textContent = 'Start';
  let openItem = document.createElement('a');
  openItem.setAttribute('href', 'https://github.com/Youngseo-kangg');
  openItem.textContent = `youngseo.kangg's github`;
  startButton.append(startButtonImg, startButtonBtn);
  footer.append(startButton, openItem);
});
