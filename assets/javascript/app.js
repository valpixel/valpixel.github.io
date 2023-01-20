class CApp {
  description = ["cheapest valorant service", "always on top", "better than drugs", "two steps ahead of the game", "gamesense.cc of valorant"];

  titleChanger = (text, delay) => {
    if (!text) return;

    let index = 0;
    setInterval(() => {
      if (index < text.length)
        document.title = text[index++];
      else
        document.title = text[(index = 0)];
    }, delay);
  };

  randomNumber = (min, max) => {
    var number = Math.floor(Math.random() * (max - (min + 1))) + min;
    return number;
  };
}

const app = new CApp();