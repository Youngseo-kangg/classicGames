import '../css/reset.css';
import '../css/index.css';
import computerIcon from '../images/computerIcon.png';
import startIcon from '../images/computerIcon.png';

document.addEventListener('DOMContentLoaded', () => {
  let readTetrisImg = document.querySelectorAll('.menuItemInfo>img');
  for (let i = 0; i < readTetrisImg.length; i++) {
    readTetrisImg[i].src = computerIcon;
  }
  let readStartImg = document.querySelector('.startButton>img');
  console.log(readStartImg);
  readStartImg.src = startIcon;
});
