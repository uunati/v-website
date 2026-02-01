const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveNo() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

// run away AGAIN & AGAIN ??
noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("mousedown", moveNo);
noBtn.addEventListener("touchstart", moveNo);

// YES button ??
yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:linear-gradient(135deg,#ff758c,#ff7eb3);
            color:white;
            text-align:center;
            font-family:Poppins,sans-serif;
        ">
            <h1>YAYYYY ????</h1>
            <h2>Happy Valentine’s Day My Love ??</h2>
            <h3>You had no choice anyway ??</h3>
        </div>
    `;
});

// floating hearts ??
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "??";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 250);