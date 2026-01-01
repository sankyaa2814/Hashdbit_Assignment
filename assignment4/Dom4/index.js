// javascript code goes here
const text = document.getElementById("text-container");
const colorBox = document.getElementById("colorbox");
const colorBtn = document.getElementById("colorchange");
const fontSizeSlider = document.getElementById("fontsize");
const italicBtn = document.getElementById("italic");
const underlineBtn = document.getElementById("underline");
const boldBtn = document.getElementById("bold");
const fontList = document.getElementById("list");
const getStyleBtn = document.getElementById("getstyle");
const cssProps = document.getElementById("css-props");

/* Change text color */
colorBtn.addEventListener("click", () => {
  text.style.color = colorBox.value;
});

/* Change font size */
fontSizeSlider.addEventListener("input", () => {
  text.style.fontSize = fontSizeSlider.value + "px";
});

/* Toggle Italic */
italicBtn.addEventListener("click", () => {
  text.style.fontStyle =
    text.style.fontStyle === "italic" ? "normal" : "italic";
});

/* Toggle Underline */
underlineBtn.addEventListener("click", () => {
  text.style.textDecoration =
    text.style.textDecoration === "underline" ? "none" : "underline";
});

/* Toggle Bold */
boldBtn.addEventListener("click", () => {
  text.style.fontWeight =
    text.style.fontWeight === "bold" ? "normal" : "bold";
});

/* Change Font Family */
fontList.addEventListener("change", () => {
  text.style.fontFamily = fontList.value;
});

/* Get CSS Properties */
getStyleBtn.addEventListener("click", () => {
  const computed = window.getComputedStyle(text);
  let styles = [];

  styles.push(`color: ${computed.color};`);
  styles.push(`font-size: ${computed.fontSize};`);
  styles.push(`font-family: ${computed.fontFamily};`);

  if (computed.fontStyle === "italic")
    styles.push(`font-style: italic;`);

  if (computed.fontWeight === "700" || computed.fontWeight === "bold")
    styles.push(`font-weight: bold;`);

  if (computed.textDecorationLine === "underline")
    styles.push(`text-decoration: underline;`);

  cssProps.textContent = styles.join(" ");
});
