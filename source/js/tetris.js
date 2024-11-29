import '../css/reset.css';
import '../css/tetris.css';
import computerIcon from '../images/computerIcon.png';
import startIcon from '../images/computerIcon.png';

const tetris = {};

tetris.start = () => {
  console.log('tetris start');

  let wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  let header = document.createElement('header');
  let main = document.createElement('main');
  let footer = document.createElement('footer');
  wrapper.append(header, main);
  document.body.append(wrapper, footer);

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

  let messageBg = document.createElement('article');
  messageBg.id = 'messageBg';
  let message = document.createElement('div');
  message.id = 'message';
  let messageP = document.createElement('p');
  messageP.id = 'messageP';
  let messageBtn = document.createElement('button');
  messageBtn.id = 'messageBtn';
  messageBtn.textContent = '닫기';
  messageBtn.addEventListener('click', () => {
    messageBg.style.display = 'none';
  }); // 이 버튼을 누르면 article꺼짐
  messageBg.style.display = 'none';
  message.append(messageP, messageBtn);
  messageBg.append(message);
  document.body.append(messageBg);

  // TODO : Header안에 h1태그, 제목, 클래스 주기
  let h1 = document.createElement('h1');
  h1.textContent = '테트리스 게임';
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
};

// Initialize app
tetris.init = function () {
  tetris.start();
};

tetris.init();
