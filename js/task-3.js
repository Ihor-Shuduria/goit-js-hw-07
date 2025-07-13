const lineInput = document.querySelector("#name-input");
const lineOutput = document.querySelector("#name-output");

lineInput.addEventListener("input", () => {
  const stringValue = lineInput.value.trim();
  lineOutput.textContent = stringValue === "" ? "Anonymous" : stringValue;
});
