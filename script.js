const BASE_URL = "https://api.exchangerate-api.com/v4/latest/";

const dropdowns=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");


for (let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected = "selected";
        }
        else if(select.name === "to" && currCode === "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt) => {
        updateFlag(evt.target);
    });
}

async function getExchangeRate(baseCurrency, targetCurrency) {
    try {
      const response = await fetch(`${BASE_URL}${baseCurrency}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.rates && data.rates[targetCurrency]) {
        return data.rates[targetCurrency];
      } else {
        throw new Error("Target currency rate not found.");
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      return null;
    }
  };

const updateExchange = async () => {
    let amt=document.querySelector(".amount input");
    let amtVal=amt.value;
    if(amtVal === "" || amtVal <1){
        amtVal=1;
        amt.value="1";
    }

    let rate = await getExchangeRate(fromCurr.value, toCurr.value);

    if (rate !== null) {
        let finalAmt=amtVal*rate;
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
    }else{
        msg.innerText = "Failed to get exchange rate.";
    }
};

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click",(evt) => {
    evt.preventDefault();
    updateExchange();
});

window.addEventListener("load", () => {
    updateExchange();
});
