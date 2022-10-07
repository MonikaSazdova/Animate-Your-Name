var myName = "Happy Birthday S'mores!"
let fail = new Audio('assets/fail_sound_1.mp3')
let win = new Audio('assets/success_sound_1.mp3')
let song = new Audio('assets/happy_birthday-fart.mp3')
let start = new Audio('assets/start.mp3')
let bubbles = new Audio('assets/bubbles.mp3')
var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];
const successMsgNames = ['Wow! You are so darn good at this!', "Wohooooo, slow down there S'mores!", 'You are killing it!', 'Impressive, you nailed it!', "Sharp memory! Keep it up S'mores"]
const failMsgNames = ["You can do better S'mores!", "Oh boy, you suck at this!", 'You missed it! Concentrate!', "Try a little harder S'mores!", "Focus S'mores!"]
const cards = [
  {type: "1", image: "assets/al.png"},
  {type: "1", image: "assets/al.png"},
  {type: "2", image: "assets/blood.png"},
  {type: "2", image: "assets/blood.png"},
  {type: "3", image: "assets/bus.png"},
  {type: "3", image: "assets/bus.png"},
  {type: "4", image: "assets/honey.png"},
  {type: "4", image: "assets/honey.png"},
  {type: "5", image: "assets/key.png"},
  {type: "5", image: "assets/key.png"},
  {type: "6", image: "assets/kosturnica.png"},
  {type: "6", image: "assets/kosturnica.png"},
  {type: "7", image: "assets/kosula.png"},
  {type: "7", image: "assets/kosula.png"},
  {type: "8", image: "assets/leafs.png"},
  {type: "8", image: "assets/leafs.png"},
  {type: "9", image: "assets/matka.png"},
  {type: "9", image: "assets/matka.png"},
  {type: "10", image: "assets/pizza.png"},
  {type: "10", image: "assets/pizza.png"},
  {type: "11", image: "assets/shirt.png"},
  {type: "11", image: "assets/shirt.png"},
  {type: "12", image: "assets/tool.png"},
  {type: "12", image: "assets/tool.png"},
  {type: "13", image: "assets/veles.png"},
  {type: "13", image: "assets/veles.png"},
  {type: "14", image: "assets/vodno.png"},
  {type: "14", image: "assets/vodno.png"},
  {type: "15", image: "assets/water.png"},
  {type: "15", image: "assets/water.png"},
  {type: "16", image: "assets/wildcard.png"},
  {type: "16", image: "assets/wildcard.png"},
  {type: "17", image: "assets/moka.png"},
  {type: "17", image: "assets/moka.png"},
  {type: "18", image: "assets/meditation.png"},
  {type: "18", image: "assets/meditation.png"},
  {type: "19", image: "assets/toothbrushes.png"},
  {type: "19", image: "assets/toothbrushes.png"},
  {type: "20", image: "assets/rain.png"},
  {type: "20", image: "assets/rain.png"},
  {type: "21", image: "assets/notepad.png"},
  { type: "21", image: "assets/notepad.png" },
];





drawName(myName, letterColors);
bubbleShape = 'circle';
bounceBubbles();
function getRandom (list) {
  return list[Math.floor((Math.random()*list.length))];
}

const failMsg = document.getElementById('failMsg');
const successMsg = document.getElementById('successMsg')




// const bubbleCanvas = document.getElementById('myCanvas');
// // bubbleCanvas.addEventListener("mousemove", function () {
// //   bubbles.play()
// // })

// function myAudioFunction() {
// var x = document.createElement("AUDIO");
// x.setAttribute("src",  "assets/impact.mp3");
// x.setAttribute("autoplay", "");
// bubbleCanvas.appendChild(x);
// }
// myAudioFunction();


const btn = document.getElementById('play');

btn.addEventListener('click', function onClick() {
	const gift = document.getElementById("gift");
	const canvas = document.getElementById("myCanvas");
  const game = document.getElementById("game");
  start.play()
  if (gift.style.display === "none" && canvas.style.display === "none") {
    game.style.display = "block"
  } else {
		gift.style.display = "none";
		canvas.style.display = "none";
		game.style.display = "block"
  }
});



//append according to number of things in array
for (var i = 0; i < cards.length; i++) {
  var $appendedItems = $(
    '<div class="card-wrapper"><div class="card '  +
    '"><div class="front face"></div><div class="back face center"><div class="image" data-type="' +
    cards[i].type +
    '" style="background-image: url(' + cards[i].image +');"/></div><div class="text">' + "</div></div></div>"
  );
  $appendedItems.appendTo(".that-memory-game");
}

//randomize all the children
var parent = $(".that-memory-game");
var divs = parent.children();
while (divs.length) {
  parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
}

var $numberCardsOpened = 0;
var $firstCard, $secondCard;

function resetCards() {
  $numberCardsOpened = 0;
  $firstCard = "";
  $secondCard = "";
}

function resultNotification(type) {
  if (type === "fail") {

const failRandomMsg = getRandom(failMsgNames)
    failMsg.textContent = failRandomMsg;
    $(".result-message .fail").css("opacity", "1");
  } else if (type === "success") {

    const successRandomMsg = getRandom(successMsgNames)
    successMsg.textContent = successRandomMsg;
    $(".result-message .success").css("opacity", "1");
  }
  setTimeout(function() {
    $(".result-message span").css("opacity", "0");
  }, 1500);
}

$(".card").on("click", function() {
  $(this).toggleClass("flipped");

  if ($numberCardsOpened == 0) {
    $firstCard = $(this)
      .find(".image")
      .data("type");
    $numberCardsOpened++;
  } else if ($numberCardsOpened == 1) {
    $secondCard = $(this)
      .find(".image")
      .data("type");

    if ($secondCard === $firstCard) {
      win.play()
      $(".flipped").addClass("done");
      resetCards();

      if ($(".done").length == cards.length) {
        $(".the-end").css("opacity", "0");
        setTimeout(function () {
          song.play()
        }, 1000);
        setTimeout(function () {
          $(".you-did-it").css("display", "none");
          $(".bounce").css("opacity", "0");
          $(".the-end").css("opacity", "1");
        }, 20500);
        $(".game-end").css("opacity", "1");
        $(".game-end").css("display", "block");
        $(".result-message span").css("display", "none");
        $(".that-memory-game").css("opacity", "0")
        $(".gameTitle").css("opacity", "0")
      } else {
        resultNotification("success");
      }
    } else {
      fail.play()
      resetCards();
      resultNotification("fail");
      setTimeout(function() {
        $(".card").removeClass("flipped");
      }, 600);
    }
  }
});
