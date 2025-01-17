import '../css/reset.css';
import '../css/hangman.css';

import { Initializer } from './common';

const hangman = {};
hangman.word = ''; //단어
hangman.definition = 'no hint, good luck!'; // 단어 정의
hangman.partOfSpeech = 'no hint, good luck!'; // 품사 정의
hangman.typeOf = ['no hint, good luck!']; // 카테고리 정의
hangman.validGuess = /[a-zA-Z]/; // 유효성 검사용
hangman.lives = 6; // 입력 기회
hangman.spelling = []; // 단어 스펠링
hangman.userGuess = []; // 유저가 입력한 내용
hangman.errorTitle = '';
hangman.errorMessage = '';

// 초기 HTML 문서를 완전히 불러오고 분석했을 때 발생 + 스타일 시트, 이미지, 하위 프레임의 로딩은 기다리지 않음
hangman.start = async () => {
  await Initializer.start();
  await Initializer.createMsg();
  await Initializer.createHeader('행멘 게임');

  // TODO : main 안에 행맨 이미지, 입력창, 점수 나타낼 div 만들고 main에 세팅
  let mainComponents = [
    'hangmanDisplay',
    'hangmanBlocks',
    'hangmanHint',
    'hangmanScore',
    'hangmanGuess',
    'hangmanInput',
  ];
  let readMain = document.querySelector('main');
  for (let i = 0; i < mainComponents.length; i++) {
    let div = document.createElement('section'); // section 새로 생성
    div.id = mainComponents[i]; // id 지정
    readMain.appendChild(div);
  }

  // TODO : hangmanBlockWrapper 만들어주기
  let readHangmanBlocks = document.querySelector('#hangmanBlocks');
  let hangmanBlockWrapper = document.createElement('div');
  hangmanBlockWrapper.id = 'hangmanBlockWrapper';
  readHangmanBlocks.append(hangmanBlockWrapper);

  // TODO : 점수창, 틀린 알파벳 창 세팅
  let readHangmanScore = document.querySelector('#hangmanScore');
  readHangmanScore.textContent = `opportunities : ${hangman.lives}`;
  let readHangmanGuess = document.querySelector('#hangmanGuess');
  readHangmanGuess.textContent = `Guess : what are your guesses?`;

  // TODO : 단어 정의, 카테고리, 품사 정의 관련 div 만들기
  let readHangmanHint = document.querySelector('#hangmanHint');
  let hangmanHints = ['definition', 'partOfSpeech', 'typeOf'];
  for (let i = 0; i < hangmanHints.length; i++) {
    let hangmanHintWrapper = document.createElement('div'); // wrapper만들어주기
    hangmanHintWrapper.id = hangmanHints[i]; // id 지정
    readHangmanHint.appendChild(hangmanHintWrapper); // 붙여주기
  }
  for (let i = 0; i < hangmanHints.length; i++) {
    let readHangmanHint = document.querySelector(`#${hangmanHints[i]}`);
    let hangmanHintText = document.createElement('div'); // 내용 태그
    let hangmanHintTitle = document.createElement('h2');
    hangmanHintText.id = `${hangmanHints[i]}Text`;
    hangmanHintTitle.textContent = hangmanHints[i];
    hangmanHintText.textContent = 'no hint, good luck!';
    readHangmanHint.append(hangmanHintTitle, hangmanHintText);
  }

  // TODO : 알파벳 입력창 + 버튼 담아둘 div 만들고 hangmanInput에 세팅
  let readHangmanInput = document.querySelector('#hangmanInput');
  let hangmanInputWrapper = document.createElement('div');
  hangmanInputWrapper.classList.add('hangmanInputWrapper');
  readHangmanInput.append(hangmanInputWrapper);

  // TODO : 알파벳 입력창 만들기
  let alphabetInput = document.createElement('input');
  alphabetInput.id = 'letterInput';
  alphabetInput.addEventListener('change', (event) => {
    hangman.typeLetter(event);
  });
  let readHangmanInputWrapper = document.querySelector('.hangmanInputWrapper');
  alphabetInput.setAttribute('type', 'text'); // text속성 주기
  readHangmanInputWrapper.append(alphabetInput);

  // TODO : 알파벳 입력 버튼 만들기
  let alphabetInputButton = document.createElement('button');
  let refreshButton = document.createElement('button');
  alphabetInputButton.textContent = '입력하기';
  alphabetInputButton.id = 'alphabetInputButton';
  refreshButton.id = 'refreshBtn';
  refreshButton.textContent = '새로고침';
  refreshButton.addEventListener('click', () => {
    // TODO : hangman 초기화 + 새로운 단어 요청
    hangmanBlockWrapper.textContent = '';
    hangman.displayQuestion();
  });
  readHangmanInputWrapper.append(alphabetInputButton, refreshButton);

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
    bodyPart.classList.add('hangmanBodyPart'); // class 지정
    bodyPart.style.display = 'none'; // class 지정
    readHangmanBody.appendChild(bodyPart);
  }

  // TODO: DOMContentLoaded확인하기
  console.log('hangman.js DOMContentLoaded');
  hangman.displayQuestion();
};

hangman.displayQuestion = function () {
  // TODO : loading indicator 켜기
  document.querySelector('header').classList.remove('ready');
  // TODO : 단어 초기화
  hangman.word = ''; //단어
  hangman.definition = 'no hint, good luck!'; // 단어 정의
  hangman.partOfSpeech = 'no hint, good luck!'; // 품사 정의
  hangman.typeOf = ['no hint, good luck!']; // 카테고리 정의
  hangman.validGuess = /[a-zA-Z]/; // 유효성 검사용
  hangman.lives = 6; // 입력 기회
  hangman.spelling = []; // 단어 스펠링
  hangman.userGuess = []; // 유저가 입력한 내용

  document.querySelector('#definitionText').textContent = 'no hint, good luck!';
  document.querySelector('#partOfSpeechText').textContent =
    'no hint, good luck!';
  document.querySelector('#typeOfText').textContent = 'no hint, good luck!';

  // TODO : 랜덤한 단어 요청하기
  fetch(
    'https://wordsapiv1.p.rapidapi.com/words/?random=true&lettersMin=1&lettersMax=10',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': process.env.WORDSAPI_HOST,
        'x-rapidapi-key': process.env.WORDSAPI_MASHAPE_KEY,
      },
    }
  )
    .then((res) => {
      res
        .json()
        .then((res) => {
          console.log(res.word);
          hangman.word = res.word; // 재할당
          // TODO : 단어 보고 네모 창 만들기
          let hangmanAlphabet = hangman.word.split('');
          for (let i = 0; i < hangmanAlphabet.length; i++) {
            let hangmanBlock = document.createElement('div');
            hangmanBlock.classList.add('hangmanBlock');
            if (hangmanAlphabet[i] === ' ') {
              hangmanBlock.classList.add('nonAlphabet', 'correct');
            } else if (hangmanAlphabet[i] === '-') {
              hangmanBlock.classList.add('nonAlphabet');
              hangmanBlock.textContent = '-';
            } else if (hangmanAlphabet[i] === '.') {
              hangmanBlock.classList.add('nonAlphabet', 'correct');
              hangmanBlock.textContent = '.';
            }
            document.querySelector('#hangmanBlockWrapper').append(hangmanBlock);
          }
          if (res.results !== undefined) {
            if (res.results.length >= 1) {
              if (res.results[0].definition) {
                hangman.definition = res.results[0].definition;
                let readHangmanHint = document.querySelector(`#definitionText`);
                readHangmanHint.textContent = hangman.definition;
              }
              if (res.results[0].partOfSpeech) {
                hangman.partOfSpeech = res.results[0].partOfSpeech;
                let readHangmanHint =
                  document.querySelector(`#partOfSpeechText`);
                readHangmanHint.textContent = '';
                let partOfSpeechTextComponents = document.createElement('p');
                partOfSpeechTextComponents.textContent = hangman.partOfSpeech;
                readHangmanHint.appendChild(partOfSpeechTextComponents);
              }
              if (res.results[0].typeOf) {
                hangman.typeOf = res.results[0].typeOf[0];
                let readHangmanHint = document.querySelector(`#typeOfText`);
                readHangmanHint.textContent = '';
                let typeOfTextComponents = document.createElement('p');
                typeOfTextComponents.textContent = hangman.typeOf;
                readHangmanHint.appendChild(typeOfTextComponents);
              }
            }
          }
          // opportunities, guess, hangman 캐릭터 초기화
          hangman.lives = 6;
          hangman.userGuess = [];
          for (
            let i = 0;
            i < document.querySelectorAll('.hangmanBodyPart').length;
            i++
          ) {
            document.querySelectorAll('.hangmanBodyPart')[i].style.display =
              'none';
          }
          document.querySelector(
            '#hangmanScore'
          ).textContent = `opportunities : ${hangman.lives}`;
          document.querySelector(
            '#hangmanGuess'
          ).textContent = `Guess : what are your guesses?`;
        })
        .then(() => {
          // TODO : loading indicator 끄기
          document.querySelector('header').classList.add('ready');
        });
    })
    .catch((err) => {
      console.error(err);
      // TODO: 에러 생겼다는 메세지 보여주기
      let article = document.createElement('article'); // 에러창으로 작동할 태그
      article.id = 'vocabError';
      let articleDiv = document.createElement('div');
      articleDiv.id = 'vocabErrorMsg';
      let articleP = document.createElement('p');
      articleP.textContent = '단어를 받아오던 중 에러가 발생했습니다.';
      let articleBtn = document.createElement('button'); // 이 버튼을 누르면 article꺼짐
      articleBtn.id = 'startBtn';
      articleBtn.textContent = '다시시작하기';
      // TODO : articleBtn 버튼 눌렀을 때 article 사라지는 함수 구현
      articleBtn.addEventListener('click', () => {
        article.style.display = 'none'; // 에러창 없애주기
        window.location.reload(); // 새로고침
      });
      // 세팅하기
      articleDiv.append(articleP, articleBtn);
      article.append(articleDiv);
      document.body.append(article);
    });
  // 요청한 단어 베이스로 칸 만들어 주기
};

hangman.typeLetter = function (event) {
  let letterInput = event.target.value;
  let readMessageBg = document.querySelector('#messageBg');
  let readMessageP = document.querySelector('#messageP');
  let readMessageBtn = document.querySelector('#messageBtn');
  // * 에러 적용시키기
  if (letterInput.length > 1) {
    // 한글자 이상 입력했을 때 오류 모달 띄워주기
    readMessageP.textContent = '한 글자 이상 입력할 수 없습니다.'; // 메세지 변경하기
    readMessageBg.style.display = 'grid'; // 모달 띄우기
    readMessageBtn.addEventListener('click', () => {
      readMessageBg.style.display = 'none'; // 모달 끄기
      document.querySelector('#letterInput').value = ''; // input창 초기화
    });
  } else if (!hangman.validGuess.test(letterInput)) {
    readMessageP.textContent = '영어만 입력할 수 없습니다.'; // 메세지 변경하기
    readMessageBg.style.display = 'grid'; // 모달 띄우기
    readMessageBtn.addEventListener('click', () => {
      readMessageBg.style.display = 'none'; // 모달 끄기
      document.querySelector('#letterInput').value = ''; // input창 초기화
    });
  } else if (hangman.userGuess.includes(letterInput)) {
    readMessageP.textContent = '이미 입력한 글자입니다.'; // 메세지 변경하기
    readMessageBg.style.display = 'grid'; // 모달 띄우기
    readMessageBtn.addEventListener('click', () => {
      readMessageBg.style.display = 'none'; // 모달 끄기
      document.querySelector('#letterInput').value = ''; // input창 초기화
    });
  } else {
    // 존재하지 않는 단어를 입력하는 경우
    hangman.userGuess.push(letterInput); // hangman.userGuess에 넣어주기
    document.querySelector('#letterInput').value = ''; // input창 초기화
    // #hangmanGuess에 추가해주기
    let readHangmanGuess = document.querySelector('#hangmanGuess');
    if (readHangmanGuess.textContent === 'Guess : what are your guesses?') {
      readHangmanGuess.textContent = `Guess : ${letterInput}`;
    } else {
      readHangmanGuess.textContent =
        readHangmanGuess.textContent + ' ' + letterInput;
    }

    if (hangman.word.includes(letterInput)) {
      // 맞는 단어라면
      let readHangmanBlock = document.querySelectorAll('.hangmanBlock');
      for (let i = 0; i < hangman.word.length; i++) {
        if (hangman.word[i] === letterInput) {
          readHangmanBlock[i].textContent = letterInput; // 텍스트 추가
          readHangmanBlock[i].classList.add('correct'); // 커스텀 데이터 속성 추가
        }
      }
    } else {
      // 틀린 단어라면
      hangman.lives--; // hangman.lives 재조정
      document.querySelector(
        '#hangmanScore'
      ).textContent = `opportunities: ${hangman.lives}`; // hangmanScore 변경
      document.querySelectorAll('.hangmanBodyPart')[
        `${6 - hangman.lives - 1}`
      ].style.display = 'block'; // hangman body 하나 보여주기
    }
  }

  if (document.querySelectorAll('.correct').length === hangman.word.length) {
    // TODO : 단어를 다 맞추게 되는 경우 성공메세지 보여주기
    readMessageP.textContent = `모두 맞췄습니다! 단어는 ${hangman.word} 였습니다.`; // 메세지 변경하기
    readMessageBg.style.display = 'grid'; // 모달 띄우기
    readMessageBtn.addEventListener('click', () => {
      readMessageBg.style.display = 'none'; // 모달 끄기
      document.querySelector('#letterInput').value = ''; // input창 초기화
      window.location.replace('index.html'); // 새로고침
    });
  } else if (hangman.lives === 0) {
    // TODO : hangman.opportunities가 0이 되면 실패메세지 보여주기
    readMessageP.textContent = `게임이 끝났습니다! 단어는 ${hangman.word} 였습니다.`; // 메세지 변경하기
    readMessageBg.style.display = 'grid'; // 모달 띄우기
    readMessageBtn.addEventListener('click', () => {
      readMessageBg.style.display = 'none'; // 모달 끄기
      document.querySelector('#letterInput').value = ''; // input창 초기화
      window.location.reload(); // 새로고침
    });
  }
};

// Initialize app
hangman.init = function () {
  hangman.start();
};

hangman.init();
