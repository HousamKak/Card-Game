lifePoint = document.querySelector("#life");
cards = document.querySelectorAll(".card");
ImagesUrl = [
  "/images/HTML-1.png",
  "/images/HTML-2.png",
  "/images/JAVA-1.jpg",
  "/images/JAVA-2.jpg",
  "/images/PYTHON-1.jfif",
  "/images/PYTHON-2.jfif",
];

ImagesUrl = shuffle(ImagesUrl);
for (let i = 0; i < ImagesUrl.length; i++) {
  j = i + 1;
  el = document.querySelector("#im" + j);
  el.src = ImagesUrl[i];
}

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
