async function loadPrices() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ripple,pax-gold&vs_currencies=usd"
    );
    const data = await res.json();

    document.getElementById("gold").innerText =
      data["pax-gold"].usd + " $";

    document.getElementById("btc").innerText =
      data.bitcoin.usd + " $";

    document.getElementById("xrp").innerText =
      data.ripple.usd + " $";

  } catch (e) {
    document.getElementById("gold").innerText = "❌";
    document.getElementById("btc").innerText = "❌";
    document.getElementById("xrp").innerText = "❌";
  }
}

loadPrices();
setInterval(loadPrices, 60000);
async function loadPrices() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ripple,pax-gold&vs_currencies=usd"
    );
    const data = await res.json();

    document.getElementById("gold").innerText =
      data["pax-gold"].usd + " $";

    document.getElementById("btc").innerText =
      data.bitcoin.usd + " $";

    document.getElementById("xrp").innerText =
      data.ripple.usd + " $";

  } catch (error) {
    document.getElementById("gold").innerText = "❌";
    document.getElementById("btc").innerText = "❌";
    document.getElementById("xrp").innerText = "❌";
  }
}

loadPrices();
