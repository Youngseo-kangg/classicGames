import '../css/reset.css';
import '../css/hangman.css';

const hangman = {};
hangman.twoPlayerQuestion = []; // 질문들
hangman.validGuess = /[a-zA-Z]/; // 유효성 검사용
hangman.userGuess = []; // 유저가 입력한 내용

// 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생 + 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않음
document.addEventListener('DOMContentLoaded', () => {
  // TODO : 필요한 header, main, div 등 만들고 세팅
  let header = document.createElement('header');
  let main = document.createElement('main');
  let footer = document.createElement('footer');
  document.body.append(header, main, footer);

  // TODO : 처음 접속했을때 띄울 안내 article 만들고 세팅
  let article = document.createElement('article'); // 시작버튼 누르기 전 창으로 작동할 태그
  article.id = 'beforeStart';
  let articleDiv = document.createElement('div');
  articleDiv.id = 'beforeStartMsg';
  let articleP = document.createElement('p');
  articleP.textContent = '행맨 게임에 오신것을 환영합니다!';
  let articleBtn = document.createElement('button'); // 이 버튼을 누르면 article꺼짐
  articleBtn.onClick = function () {
    console.log('클릭!');
  };
  articleBtn.id = 'startBtn';
  articleBtn.textContent = '게임 시작하기';
  articleDiv.append(articleP, articleBtn);
  article.append(articleDiv);
  document.body.append(article);

  // TODO : Header안에 h1태그, 제목, 클래스 주기
  let h1 = document.createElement('h1');
  h1.textContent = '행맨 게임';
  document.querySelector('header').appendChild(h1);

  // TODO : main 안에 행맨 이미지, 입력창, 점수 나타낼 div 만들고 main에 세팅
  let mainComponents = ['hangmanDisplay', 'hangmanInput', 'hangmanScore'];
  let readMain = document.querySelector('main');
  for (let i = 0; i < mainComponents.length; i++) {
    let div = document.createElement('section'); // section 새로 생성
    div.id = mainComponents[i]; // id 지정
    readMain.appendChild(div);
  }

  // TODO : 알파벳 입력창 + 버튼 담아둘 div 만들고 hangmanInput에 세팅
  let readHangmanInput = document.querySelector('#hangmanInput');
  let hangmanInputWrapper = document.createElement('div');
  hangmanInputWrapper.classList.add('hangmanInputWrapper');
  readHangmanInput.append(hangmanInputWrapper);

  // TODO : 알파벳 입력창 만들기
  let alphabetInput = document.createElement('input');
  let readHangmanInputWrapper = document.querySelector('.hangmanInputWrapper');
  alphabetInput.setAttribute('type', 'text'); // text속성 주기
  alphabetInput.setAttribute('placeholder', 'Letter'); // text속성 주기
  readHangmanInputWrapper.append(alphabetInput);

  // TODO : 알파벳 입력 버튼 만들기
  let alphabetInputButton = document.createElement('button');
  alphabetInputButton.textContent = '입력하기';
  readHangmanInputWrapper.append(alphabetInputButton);

  // TODO : 행맨 매달릴 부분 + 캐릭터 만들기
  let readHangmanDisplay = document.querySelector('#hangmanDisplay');
  // * 매달릴 부분 만들기
  let treeComponents = ['rope', 'branch', 'tree', 'ground'];
  let tree = document.createElement('div');
  tree.id = 'hangmanTree';
  readHangmanDisplay.appendChild(tree);
  let readTree = document.querySelector('#hangmanTree');
  for (let i = 0; i < treeComponents.length; i++) {
    let treePart = document.createElement('div');
    treePart.id = treeComponents[i]; // id 지정
    readTree.appendChild(treePart);
  }

  // * 캐릭터 만들기
  let hangmanBody = document.createElement('div');
  hangmanBody.classList.add('hangmanBody');
  readHangmanDisplay.appendChild(hangmanBody);
  let readHangmanBody = document.querySelector('.hangmanBody');
  let bodyComponents = [
    'head',
    'torso',
    'leftArm',
    'rightArm',
    'leftLeg',
    'rightLeg',
  ];
  for (let i = 0; i < bodyComponents.length; i++) {
    let bodyPart = document.createElement('div');
    bodyPart.id = bodyComponents[i]; // id 지정
    readHangmanBody.appendChild(bodyPart);
  }

  // TODO: DOMContentLoaded확인하기
  console.log('hangman.js DOMContentLoaded');
});

hangman.displayQuestion = function () {
  // 랜덤한 숫자 뽑아주는 randomInt
  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // 랜덤한 단어 요청하기
  fetch(
    `https://www.wordgamedb.com/api/v1/words/?numLetters=${randomIntFromInterval(
      3,
      7
    )}`
  )
    .then((res) => res.json())
    .then((res) => console.log(res));
};
