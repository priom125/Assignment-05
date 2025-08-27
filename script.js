const heartValue = document.getElementById("heartValue");
const heartBtns = document.querySelectorAll(".heartBtn");
// Clicking on the 💗 heart icon of any card will increase the count in the Navbar
heartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let count = parseInt(heartValue.innerText);
    count++;
    heartValue.innerText = count;
  });
});


const copyValue = document.querySelector(".copyValue");
const copyBtns = document.querySelectorAll(".copyBtn");
// Clicking on the copy button of any card will increase the count in the Navbar
copyBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let count = parseInt(copyValue.innerText);
    count++;
    copyValue.innerText = count;
  });
});



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

      // Create new call history entry
      const historyDiv = document.createElement('div');
historyDiv.className = "call-history-entry flex justify-between items-center bg-[#FAFAFA] p-[14px] rounded-2xl mt-[20px]";
historyDiv.innerHTML = `
  <div>
    <h5 class="font-semibold">${card.querySelector('h3').innerText}</h5>
    <span class="text-[#5C5C5C]">${numberElem.innerText}</span>
  </div>
  <div>
    <span class="text-[#111111]">${getCurrentTime()}</span>
  </div>
`;

      // Insert at the top, after the .top-head element
      const topHead = callHistoryContainer.querySelector('.top-head');
      topHead.insertAdjacentElement('afterend', historyDiv);

    } else {
      alert("You don't have enough coins to make a call.");
    }
  });
});

// Select the Call History container (the sidebar div where history items go)
const callHistoryContainer = document.querySelector('.side-bar');

// Helper to format time
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}
// Clear Call History functionality
const clearBtn = document.querySelector(".clearBtn");
clearBtn.addEventListener("click", () => {
  const historyItems = callHistoryContainer.querySelectorAll('.call-history-entry');
  historyItems.forEach(item => item.remove());
});

// copy button functionality
const copyBtns2 = document.querySelectorAll(".copyBtn");
copyBtns2.forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const numberElem = card.querySelector(".number");
    navigator.clipboard.writeText(numberElem.innerText)
  });
});


