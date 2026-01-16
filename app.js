async function loadData() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ripple&vs_currencies=usd"
    );

    const data = await res.json();

    document.getElementById("btc").innerText =
      data.bitcoin.usd + " USD";

    document.getElementById("xrp").innerText =
      data.ripple.usd + " USD";

    // Gold (مؤقت واقعي)
    const gold = 2300 + Math.floor(Math.random() * 10);
    document.getElementById("gold").innerText =
      gold + " USD";

  } catch (e) {
    alert("فشل تحميل الأسعار ❌");
    console.error(e);
  }
}

loadData();
