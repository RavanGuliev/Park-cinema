const seatContainer = document.getElementById("seatContainer");
const ticketPrice = 5;

// Oturacaqları yarat
function handleseat() {
  let kod = '';
  for (let i = 1; i <= 12; i++) {
    kod += `<tr>`;
    let count = 1;
    for (let j = 1; j <= 17; j++) {
      let cell = "";

      if (i > 6 && j < 3) {
        cell = "";
      } else if (!((j > 2 && j < 6) && i > 1)) {
        cell = count++;
      }

      if (j > 16 && i > 1) {
        cell = "";
      }

      if (cell !== "") {
        kod += `<td data-row="${i}" data-col="${j}" onclick="toggleSeat(this)">${cell}</td>`;
      } else {
        kod += `<td></td>`;
      }
    }
    kod += `</tr>`;
  }
  seatContainer.innerHTML = kod;
}

handleseat();


let zoom = 1;
function zoomIn() {
  zoom += 0.1;
  seatContainer.style.transform = `scale(${zoom})`;
}
function zoomOut() {
  zoom = Math.max(0.5, zoom - 0.1);
  seatContainer.style.transform = `scale(${zoom})`;
}


function toggleSeat(td) {
  td.classList.toggle('selected');
  updatePrice();
}

function updatePrice() {
  const selectedSeats = [];
  const selectedTds = document.querySelectorAll('#seatContainer td.selected');

  selectedTds.forEach(td => {
    const row = td.getAttribute('data-row');
    const col = td.getAttribute('data-col');
    selectedSeats.push(`Sıra ${row}, Yer ${col}`);
  });

  const total = selectedSeats.length * ticketPrice;

 
  document.getElementById("total-price").textContent = total + " AZN";
  document.getElementById("selected-seats").textContent = selectedSeats.join(" | ");

}
