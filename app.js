function sayHello() {
  alert("مرحباً! JavaScript يعمل ✅");
}
function getGoldPrice() {
  // سعر تجريبي (لاحقًا نربطه ببيانات حقيقية)
  let price = 2350 + Math.floor(Math.random() * 20);
  document.getElementById("goldPrice").innerText = price + " USD";
}
