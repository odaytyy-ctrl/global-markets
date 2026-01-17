let chart;

async function fetchPrices() {
  try {
    // BTC & XRP
    const cryptoRes = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ripple&vs_currencies=usd"
    );
    const cryptoData = await cryptoRes.json();

    document.getElementById("btc").innerText =
      "USD " + cryptoData.bitcoin.usd.toLocaleString();

    document.getElementById("xrp").innerText =
      "USD " + cryptoData.ripple.usd.toFixed(2);

    // GOLD
    const goldRes = await fetch("https://api.metals.live/v1/spot/gold");
    const goldData = await goldRes.json();
    const goldPrice = goldData[0][1];

    document.getElementById("gold").innerText =
      "USD " + goldPrice.toFixed(0);

    drawChart(cryptoData.bitcoin.usd, cryptoData.ripple.usd, goldPrice);

  } catch (err) {
    alert("❌ فشل تحميل الأسعار");
    console.error(err);
  }
}

function drawChart(btc, xrp, gold) {
  const ctx = document.getElementById("marketChart").getContext("2d");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Bitcoin", "XRP", "Gold"],
      datasets: [{
        label: "USD",
        data: [btc, xrp, gold],
      }]
    }
  });
}

// تحميل تلقائي
fetchPrices();
