
const themeOption = document.getElementById("themeOption")
const themeStylesheet = document.getElementById("themeStylesheet")

themeOption.addEventListener("change", function () {
    themeStylesheet.setAttribute("href", this.value + ".css")
    alert("Hello friend, Tema Telah Berubah");
})


// function myFunction() {
//     alert("Hello friend, Tema Telah Berubah");
// }
// function isFunction() {
//     alert("Hello friend, Tema kembali Default");
// }
