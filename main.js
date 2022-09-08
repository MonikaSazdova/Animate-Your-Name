var myName = "Happy Birthday"


var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);
bubbleShape = 'circle';
bounceBubbles();


const btn = document.getElementById('play');

btn.addEventListener('click', function onClick() {
	console.log('HEY');
	const gift = document.getElementById("gift");
	const canvas = document.getElementById("myCanvas");
	const game = document.getElementById("game");
  if (gift.style.display === "none" && canvas.style.display === "none") {
		game.style.display = "block"
  } else {
		gift.style.display = "none";
		canvas.style.display = "none";
		game.style.display = "block"
  }
});

var cards = [
  {
    type: "1",
    image: "assets/matka.png"
  },
  {
    type: "1",
    image: "assets/matka.png"
  },
  {
    type: "2",
    image: "assets/vodno.png"
  },
  {
    type: "2",
    image: "assets/vodno.png"
  },
  {
    type: "3",
    image: "assets/train.png"
  },
  {
    type: "3",
    image: "assets/train.png"
  },
  {
    type: "4",
    image: "assets/veles.png"
  },
  {
    type: "4",
    image: "assets/veles.png"
  },
  {
    type: "5",
    image: "assets/tool.png"
  },
  {
    type: "5",
    image: "assets/tool.png"
  },
  {
    type: "6",
    image: "assets/meditation.png"
  },
  {
    type: "6",
    image: "assets/meditation.png"
  },
  {
    type: "7",
    image: "assets/pizza.png"
  },
  {
    type: "7",
    image: "assets/pizza.png"
  },
  {
    type: "8",
    image: "assets/honey.png"
  },
  {
    type: "8",
    image: "assets/honey.png"
  },
  {
    type: "9",
    image: "assets/bus.png"
  },
  {
    type: "9",
    image: "assets/bus.png"
  },
  {
    type: "10",
    image: "assets/blood.ong"
  },
  {
    type: "10",
    image: "assets/blood.png"
  },
  {
    type: "11",
    image: "assets/al.png"
  },
  {
    type: "11",
    image: "assets/al.png"
  },
  {
    type: "12",
    image: "assets/key.png"
  },
  {
    type: "12",
    image: "assets/key.png"
  },
  {
    type: "13",
    image: "assets/water.png"
  },
  {
    type: "13",
    image: "assets/water.png"
  },
  {
    type: "14",
    image: "assets/wildcard.png"
  },
  {
    type: "14",
    image: "assets/wildcard.png"
  },
  {
    type: "15",
    image: "assets/shirt.png"
  },
  {
    type: "15",
    image: "assets/shirt.png"
  },
  {
    type: "16",
    image: "assets/moka.png"
  },
  {
    type: "16",
    image: "assets/moka.png"
  },
  {
    type: "17",
    image: "assets/leafs.png"
  },
  {
    type: "17",
    image: "assets/leafs.png"
  },
  {
    type: "18",
    image: "assets/kosturnica.png"
  },
  {
    type: "18",
    image: "assets/kosturnica.png"
  },
  {
    type: "19",
    image: "assets/kosula.png"
  },
  {
    type: "19",
    image: "assets/kosula.png"
  },
];

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
    $(".result-message .fail").css("opacity", "1");
  } else if (type === "success") {
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
      $(".flipped").addClass("done");
      resetCards();

      if ($(".done").length == cards.length) {
        $(".game-end").css("opacity","1");
      } else {
        resultNotification("success");
      }
    } else {
      resetCards();
      resultNotification("fail");
      setTimeout(function() {
        $(".card").removeClass("flipped");
      }, 600);
    }
  }
});
