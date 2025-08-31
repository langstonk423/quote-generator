function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings:
      "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateQuote);
