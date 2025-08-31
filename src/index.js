function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let apiKey = "210582ba042t86a73ao8363bf3c4136e";
  let instructionInput = document.querySelector("#user-instruction");
  let prompt = `User instructions: Generate a fun, positive, and creative quote about ${instructionInput.value}`;
  let context =
    "You are creative and love to provide new ideas, quotes, and fun captions. You are a great writer and have a positive attitude. Your mission is to generate a creative and unique quote, caption, or idea based on the user instructions. Please sign your answer with 'SheCodes AI' inside <a href> element that is linked to 'https://www.shecodes.io' and link should open a new tab in the browser. The signature must be at the end on the line below the quote.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let generatorFormElement = document.querySelector("#generator-form");
generatorFormElement.addEventListener("submit", generateQuote);
