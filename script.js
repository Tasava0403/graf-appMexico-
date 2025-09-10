const greenStripe = document.querySelector('.stripe-green');
const redStripe = document.querySelector('.stripe-red');

const greenRange = document.getElementById('greenRange');
const redRange = document.getElementById('redRange');

const greenHexLabel = document.getElementById('greenHex');
const redHexLabel = document.getElementById('redHex');

// Función para convertir valores RGB a Hex
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

greenRange.addEventListener('input', () => {
  const value = parseInt(greenRange.value);
  const g = Math.min(128 + value, 255); // Evitar pasar de 255
  greenStripe.style.backgroundColor = `rgb(0, ${g}, 0)`;
  greenHexLabel.textContent = rgbToHex(0, g, 0);
});

redRange.addEventListener('input', () => {
    const value = parseInt(redRange.value);
    // Mantener el rojo entre 255 y un mínimo (ej: 50) para evitar el negro
    const r = Math.max(255 - value, 50); // Ajusta el 50 según qué tan oscuro quieras
    redStripe.style.backgroundColor = `rgb(${r}, 0, 0)`;
    redHexLabel.textContent = rgbToHex(r, 0, 0);
});
