function timing() {
    const timer = document.getElementsByTagName("h1")[0];
    const now = new Date();
    const indiaTime = now.toLocaleTimeString();
    timer.innerHTML = indiaTime;
}
setInterval(timing, 1000);
// const timer = document.getElementById("root");
timer.style.fontSize = "200px";
timer.style.display = "flex";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";