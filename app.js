function sayHello() {
  alert("مرحباً! JavaScript يعمل ✅");
}
function getGoldPrice() {
  // سعر تجريبي (لاحقًا نربطه ببيانات حقيقية)
  let price = 2350 + Math.floor(Math.random() * 20);
  document.getElementById("goldPrice").innerText = price + " USD";
}
async function loadData() {

  // 🔹 كريبتو من CoinGecko
  const cryptoRes = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple&vs_currencies=usd"
  );
  const crypto = await cryptoRes.json();

  document.getElementById("btc").innerText =
    crypto.bitcoin.usd + " USD";

  document.getElementById("xrp").innerText =
    crypto.ripple.usd + " USD";

  // 🔹 سعر الذهب (تجريبي واقعي)
  let goldPrice = 2300 + Math.floor(Math.random() * 20);
  document.getElementById("gold").innerText =
    goldPrice + " USD";

  drawChart(goldPrice, crypto.bitcoin.usd, crypto.ripple.usd);
}

// 🔹 رسم بياني مباشر
let chart;
function drawChart(gold, btc, xrp) {
  const ctx = document.getElementById("marketChart");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Gold", "Bitcoin", "XRP"],
      datasets: [{
        label: "Market Prices",
        data: [gold, btc, xrp],
        borderWidth: 2
      }]
    }
  });
}

loadData();
