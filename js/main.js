// define a variable with our map
// определим переменную в которую получим карту
let map = document.getElementById("map");
let soundShot = document.getElementById("sound-shot");

// devine a variable with X/Y coordinate when click mouse on map
// определим переменную с координатами X/Y мышки при клике на карту
let clickX = null;
let clickY = null;

// player score
// очки игрока
let score = 0;
let level = 0;
let bkgNumber = 0;

// random words 
// рандомные слова
let randomX1 = ["Галактика найдена!", "Ура! Наш корабль нашёл свой путь!", "Цель достигнута!", "Мы вошли в межгалактическое пространство!", "Можно приземляться!", "Мы в галактике!"];
let randomX2 = ["Мичман - следуйте этому же курсу!", "Мы практически у цели!", "Я почти вижу галактику!", "Наши звёзды совсем рядом!", "Вот-вот наш корабль приземлиться!", "Почти прилетели!"];
let randomX3 = ["Я чувствую дорогу нутром!", "Где-то рядом...", "Вроде уже ближе...", "Круг сжимаеться!", "Ищем!"];
let randomX4 = ["Что то, где то..", "Наша галактика не тут...", "Это не наша туманность", "Далековато...", "Все летим и летим"];
let randomX5 = ["Далековато..", "Не та туманность", "Сигнал очень слабый", "Очень далеко", "Вокруг да около!"];
let randomX6 = ["Лучше молчи!", "Ну и олух!", "Все криво!", "Не туда клацнул!", "Выключись...", "Слепой шоле?", "Как всегда...", "Слепота ты деревенская!!"];

// create random jumping target
// создадим рандомно прыгающую цель
// let targetWidth = Math.floor(Math.random() * window.screen.width);
// let targetHeight = Math.floor(Math.random() * window.screen.height);
// console.log("targetWidth = " + targetWidth);
// console.log("targetHeight = " + targetHeight);
let targetWidth;
let targetHeight;

// По клику на кнопку PLAY! скроем шторку и активируем игру
// On click button PLAY! disable curtain and start game
$("#btn-play").click(function (e) {
  $("#curtain").css("display", "none");
  $("#info-modal").css("display", "none");
  targetWidth = Math.floor(Math.random() * window.screen.width);
  targetHeight = Math.floor(Math.random() * window.screen.height);
  console.log("targetWidth = " + targetWidth);
  console.log("targetHeight = " + targetHeight);
  if (level === 1) {
    $("body").css("background", "url(../img/bkg-1.jpg) no-repeat, top / cover");
  } else {
    if (level === 2) {
      $("body").css("background", "url(../img/bkg-2.jpg) no-repeat, top / cover");
    } else {
      if (level === 3 ) {
        $("body").css("background", "url(../img/bkg-3.jpg) no-repeat, top / cover");
      } else {
        if (level === 4) {
          $("body").css("background", "url(../img/bkg-4.jpg) no-repeat, top / cover");
        } else {
          if (level === 5) {
            $("body").css("background", "url(../img/bkg-5.jpg) no-repeat, top / cover");
          }
        }
      }
    }
  }
});

// add event listener on click
// добавим слушателя на клик
map.addEventListener("click", function (event) {
  soundShot.play();
  score++
  clickX = event.pageX;
  clickY = event.pageY
  $("#score__number").text(score);
  if (clickX <= (targetWidth + 50) && clickX >= (targetWidth - 50) && clickY <= (targetHeight + 50) && clickY >= (targetHeight - 50)) {
    $("#curtain").css("display", "block");
    $("#info-modal").css("display", "flex");
    $("#prompt__title").text(randomX1[Math.floor(Math.random() * randomX1.length)]);
    $(".radar__block-clear").css("background-color", "inherit");
    $(".radar__block1, .radar__block2, .radar__block3, .radar__block4, .radar__block5").css("background-color", "#4deeea");
    level++;
    $(".level__number").text(level);
    $(".radar__block-clear").css("background-color", "inherit");
  } else {
    if (clickX <= (targetWidth + 100) && clickX >= (targetWidth - 100) && clickY <= (targetHeight + 100) && clickY >= (targetHeight - 100)) {
      $("#prompt__title").text(randomX2[Math.floor(Math.random() * randomX2.length)]);
      $(".radar__block-clear").css("background-color", "inherit");
      $(".radar__block1, .radar__block2, .radar__block3, .radar__block4").css("background-color", "#4deeea");
    } else {
      if (clickX <= (targetWidth + 200) && clickX >= (targetWidth - 200) && clickY <= (targetHeight + 200) && clickY >= (targetHeight - 200)) {
        $("#prompt__title").text(randomX3[Math.floor(Math.random() * randomX3.length)]);
        $(".radar__block-clear").css("background-color", "inherit");
        $(".radar__block1, .radar__block2, .radar__block3").css("background-color", "#4deeea");
      } else {
        if (clickX <= (targetWidth + 300) && clickX >= (targetWidth - 300) && clickY <= (targetHeight + 300) && clickY >= (targetHeight - 300)) {
          $("#prompt__title").text(randomX4[Math.floor(Math.random() * randomX4.length)]);
          $(".radar__block-clear").css("background-color", "inherit");
          $(".radar__block1, .radar__block2").css("background-color", "#4deeea");
        } else {
          if (clickX <= (targetWidth + 500) && clickX >= (targetWidth - 500) && clickY <= (targetHeight + 500) && clickY >= (targetHeight - 500)) {
            $("#prompt__title").text(randomX5[Math.floor(Math.random() * randomX5.length)]);
            $(".radar__block-clear").css("background-color", "inherit");
            $(".radar__block1").css("background-color", "#4deeea");
          } else {
            $("#prompt__title").text(randomX6[Math.floor(Math.random() * randomX6.length)]);
            $(".radar__block-clear").css("background-color", "inherit");
          }
        }
      }
    }
  }
});

