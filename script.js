const heartValue = document.getElementById("heartValue");
const heartBtns = document.querySelectorAll(".heartBtn");

heartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let count = parseInt(heartValue.innerText);
    count++;
    heartValue.innerText = count;
  });
});

// Clicking on the 💗 heart icon of any card will increase the count in the Navbar

const callBtns = document.querySelectorAll(".callBtn");
//reduce function from navbar
function reduce() {
    const coinNumber = document.getElementById("coin");
    let coins = parseInt(coinNumber.innerText);
    if (coins>=20) {
  
    let afterCoin = coins - 20;
    coinNumber.innerText = afterCoin;
    }else{
        alert("You don't have enough coins to make a call.");
    }
}

// showing name number using alert 

const nameElem = document.querySelector(".name");
const numberElem = document.querySelector(".number");
function showAlert() {
alert('Calling ' + nameElem.innerText + ' at ' + numberElem.innerText);
}


//clicking call btn and it will add call history section

callBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const coinNumber = document.getElementById("coin");
    let coins = parseInt(coinNumber.innerText);  
    if (coins >= 20) {
      // Deduct coins
      reduce();

      // Find the closest card and get its name and number
      const card = btn.closest(".card");
      const nameElem = card.querySelector(".name");
      const numberElem = card.querySelector(".number");
      alert('Calling ' + nameElem.innerText + ' at ' + numberElem.innerText);
    } else {
      alert("You don't have enough coins to make a call.");
    }
  });
});

