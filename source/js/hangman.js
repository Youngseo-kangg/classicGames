import '../css/reset.css';
import '../css/hangman.css';

// 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생 + 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않음
document.addEventListener('DOMContentLoaded', () => {
  // TODO : 필요한 header, main, div 등 만들고 세팅
  let header = document.createElement('header');
  let main = document.createElement('main');
  let footer = document.createElement('footer');
  document.body.append(header, main, footer);

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
