// const calcul = {
//   add: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   devide: function (a, b) {
//     return a / b;
//   },
// };

// const result = {
//   add: calcul.add(1, 2),
//   minus: calcul.minus(10, 2),
//   devide: calcul.devide(20, 10),
// };
// console.log(result);

// const hello = document.querySelector('.hello h1');

// function handleTitleClick() {
//   hello.style.color = 'blue';
//   console.log('title was clicked');
// }

// function handleMouseEnter() {
//   hello.innerText = 'Mouse is here!';
// }

// function handleMouseLeave() {
//   hello.innerText = 'Mouse is gone!';
// }

// function handleWIndowResize() {
//   document.body.style.backgroundColor = 'tomato';
// }

// function handleWindowCopy() {
//   alert('copier');
// }

// function handleWifiOffline() {
//   alert('Your Internet is shutdown!');
// }

// function handleWifiOnline() {
//   alert('Connet!');
// }

// hello.addEventListener('click', handleTitleClick);
// hello.addEventListener('mouseenter', handleMouseEnter);
// hello.addEventListener('mouseleave', handleMouseLeave);

// window.addEventListener('resize', handleWIndowResize);
// window.addEventListener('copy', handleWindowCopy);
// window.addEventListener('offline', handleWifiOffline);
// window.addEventListener('online', handleWifiOnline);

// const hello = document.querySelector('.hello h1');

// function handleTitleClick() {
//   const currentColor = hello.style.color;
//   let newColor;
//   if (currentColor === 'blue') {
//     newColor = 'tomato';
//   } else {
//     newColor = 'blue';
//   }
//   hello.style.color = newColor;
// }

// hello.addEventListener('click', handleTitleClick);

const hello = document.querySelector('.hello h1');

function handleTitleClick() {
  const clickedClass = 'clicked';
  if (hello.className === clickedClass) {
    hello.className = '';
  } else {
    hello.classList = clickedClass;
  }
}

hello.addEventListener('click', handleTitleClick);
