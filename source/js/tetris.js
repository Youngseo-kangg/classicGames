import '../css/reset.css';
import '../css/tetris.css';

import { Initializer } from './common';

const tetris = {};

tetris.start = async () => {
  await Initializer.start();
  await Initializer.createMsg();
  await Initializer.createHeader('테트리스 게임');

  const tetrisCanvas = document.createElement('canvas');
  tetrisCanvas.id = 'game';
  tetrisCanvas.width = 320;
  tetrisCanvas.height = 640;

  const main = document.querySelector('main');
  await main.append(tetrisCanvas);
};

const generateRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateSequence = () => {
  const sequence = ['I', 'J', 'L', 'O', 'S', 'T', 'Z'];

  while (sequence.length) {
    const randomIdx = generateRandomInt(0, sequence.length - 1);
    const randomTetSeq = sequence.splice(randomIdx, 1)[0];
    tetrominoSequence.push(randomTetSeq);
  }
};

// Initialize app
tetris.init = function () {
  tetris.start();
};

tetris.init();
