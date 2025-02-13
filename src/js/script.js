const botaoBarra = document.getElementById("botaoBarra");
const sidebar = document.getElementById("sidebar");
const content = document.querySelector("main");

botaoBarra.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        content.classList.remove("expanded");
        content.style.opacity = 1;
    } else {
        sidebar.style.left = "0";
        content.classList.add("expanded");
        content.style.opacity = 0.3;
    }
});