lifePoint = document.querySelector("#life");
cards = document.querySelectorAll(".card");
ImagesUrl = [
  "/images/HTML-1.png",
  "/images/HTML-1.png",
  "/images/JAVA-1.jpg",
  "/images/JAVA-1.jpg",
  "/images/PYTHON-1.jfif",
  "/images/PYTHON-1.jfif",
];

// Adding images
ImagesUrl = shuffle(ImagesUrl);
for (let i = 0; i < ImagesUrl.length; i++) {
  j = i + 1;
  el = document.querySelector("#im" + j);
  el.src = ImagesUrl[i];
}
//
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flipping")) {
      card.classList.toggle("flipping");
    }

    previous = document.querySelector(".prev");
    card.classList.toggle("prev");

    if (previous != null) {
      previous.classList.toggle("prev");
      if (previous.children[0].src == card.children[0].src) {
        previous.classList.add("display");
        card.classList.add("display");
        card.classList.toggle("prev");
      } else {
        card.classList.toggle("flipping");
        previous.classList.toggle("flipping");
        card.classList.toggle("prev");
        lifePoint.textContent -= 1;
      }
    }

    flipped = document.querySelectorAll(".flipping");
    // console.log(flipped);

    // if (flipped.length == 2) {
    //   flipped.forEach((key) => {
    //     key.classList.toggle("flipping");
    //   });
    // }
  });
});

// Shuffling elements
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// // waiting function
// function sleep(miliseconds) {
//   const currentTime = new Date().getTime();

//   while (currentTime + miliseconds >= new Date().getTime()) {}
// }
