// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const inpDelay = document.querySelector('.inp');
const ful = document.querySelector('.radio-ful');
const rej = document.querySelector('.radio-rej');
const btn = document.querySelector('.btn');
const form = document.querySelector('.form');

btn.addEventListener('click', function (event) {
  event.preventDefault();
  const delay = Number(inpDelay.value);

  // check delay
  if (!inpDelay.value || isNaN(delay) || delay < 0) {
    iziToast.warning({
      title: 'Warning',
      message: '⏰ Please enter a valid positive number in ms!',
      position: 'topRight',
    });
    return;
  }

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ful.checked) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else if (rej.checked) {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(result => {
      iziToast.success({
        title: 'Success',
        message: result,
        position: 'topRight',
      });
      form.reset();
      //   console.log(result);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error,
        position: 'topRight',
      });
      form.reset();
    });
  //   console.log(ful.checked);
  //   console.log(delay);
});
